const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const UserProfile= db.profile;
const axios = require('axios');
const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  try {
    // Save User to Database
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    //Save user profile data
    await UserProfile.create({
      id:user.id,
      username: req.body.username,
      email: req.body.email,
    })

    // Determine roles
    let userRoles = [1]; // Default user role
    if (req.body.roles) {
      const roles = await Role.findAll({
        where: { name: { [Op.or]: req.body.roles } },
      });
      if (roles.length) {
        userRoles = roles.map(role => role.id);
      }
    }
    
    await user.setRoles(userRoles);

    // Generate JWT token for email verification
    const verificationToken = jwt.sign(
      { userId: user.id },
       config.secret, // Replace with your actual secret key
      { expiresIn: '1d' } // Token expires in 1 day
    );

    // Send verification email using Brevo's API key
    const brevoApiKey = '';
    const brevoEndpoint = 'https://api.brevo.com/email/send';

    const emailData = {
      apiKey: brevoApiKey,
      to: user.email,
      subject: 'Account Verification',
      text: 'Thank you for registering! Click the link to verify your account.',
      html: `<p>Thank you for registering! Click <a href="https://presser.io/verify/${verificationToken}">here</a> to verify your account.</p>`,
    };

    const response = await axios.post(brevoEndpoint, emailData);

    console.log('Email sent:', response.data);

    res.send({ message: 'User registered successfully. Verification email sent.' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Password is wrong!"
        });
      }
      console.log("aaaaaaaaaaaaaaaaaaaaa", req.body.email)
      const token = jwt.sign({ id: user.id },
                              config.secret,
                              {
                                algorithm: 'HS256',
                                allowInsecureKeySizes: true,
                                expiresIn: 86400, // 24 hours
                              });

      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token,
          message:"Logged in successfully!"
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};