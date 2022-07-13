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
        type: Sequelize.STRING
      },
      announcementLink:{
        type: Sequelize.STRING
      },
    });
    return Announcement;
    
  };