module.exports = (sequelize, Sequelize) => {
    const LogBook = sequelize.define("logbook", {
      editItemID:{
        type: Sequelize.STRING
      },
      modificationDetail: {
        type: Sequelize.STRING
      },
    });
    return LogBook;
  };
  