module.exports = (sequelize, Sequelize) => {
  const Tier = sequelize.define("tier", {
    tier_name: {
      type: Sequelize.STRING
    },
    tier_description: {
      type: Sequelize.STRING
    },
    tier_icon: {
      type: Sequelize.STRING
    },
    grapes_needed: {
      type: Sequelize.INTEGER
    },
    lemons_awarded:{
      type: Sequelize.INTEGER
    },
  });
  return Tier;
  
};