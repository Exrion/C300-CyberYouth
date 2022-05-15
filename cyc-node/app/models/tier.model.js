module.exports = (sequelize, Sequelize) => {
  const Tier = sequelize.define("tier", {
    tierName: {
      type: Sequelize.STRING
    },
    tierDescription: {
      type: Sequelize.STRING
    },
    tierIcon: {
      type: Sequelize.STRING
    },
    grapesNeeded: {
      type: Sequelize.INTEGER
    },
    lemonsAwarded:{
      type: Sequelize.INTEGER
    },
  });
  return Tier;
  
};