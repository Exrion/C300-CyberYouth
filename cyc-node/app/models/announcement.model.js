module.exports = (sequelize, Sequelize) => {
    const Announcement = sequelize.define("announcement", {
        announcementTitle: {
        type: Sequelize.STRING
      },
      announcementType: {
        type: Sequelize.STRING
      },
      announcementBody: {
        type: Sequelize.STRING
      },
      announcementImg: {
        type: Sequelize.INTEGER
      },
      announcementLink:{
        type: Sequelize.INTEGER
      },
    });
    return Announcement;
    
  };