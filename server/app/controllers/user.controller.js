  const db = require("../models");  
  const UserProfile= db.profile;

  exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };
  exports.profile = async (req, res) => {
    try {
      const email = req.params.email;
      console.log('eeeeeeeeeeeeeeeeeeeeeee', email)
      const data = await UserProfile.findAll(
        {
          where: { email: email },
        }
      );

      res.json(data);
      console.log('ddddddddddddddddddd',data)
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };