module.exports = (sequelize, Sequelize) => {
  const Trophy = sequelize.define("trophy", {
    trophy_name: {
      type: Sequelize.STRING
    },
    trophy_description: {
      type: Sequelize.STRING
    },
    total_progress: {
      type: Sequelize.INTEGER
    },
    total_lvl: {
      type: Sequelize.INTEGER
    },
    trophy_lemons:{
      type: Sequelize.INTEGER
    },
    // created_at: {
    //   type: Sequelize.DATE
    // },
    // modified_at: {
    //   type: Sequelize.DATE
    // }
  });
  return Trophy;
  
};