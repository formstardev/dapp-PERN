module.exports = (sequelize, Sequelize) => {
    const UserProfile = sequelize.define("profile", {
        id:{
            type:Sequelize.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false,

        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        avatar: {
            type: Sequelize.STRING,
            defaultValue:'/images/human/man-4.png' // You can store the avatar URL here
        },
        bio: {
            type: Sequelize.TEXT,
        },
        followers: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
        },
        following: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
        },
        speaks: {
            type: Sequelize.INTEGER,
            defaultValue:0,
        }
      });
    
    return UserProfile;
  };