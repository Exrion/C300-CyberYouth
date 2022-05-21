module.exports = (sequelize, Sequelize) => {
  const Trophy = sequelize.define("trophy", {
    trophyName: {
      type: Sequelize.STRING,
    },
    trophyDescription: {
      type: Sequelize.STRING,
    },
    trophyIcon: {
      type: Sequelize.STRING
    },
    totalProgress: {
      type: Sequelize.INTEGER,
    },
    totalLvl: {
      type: Sequelize.INTEGER,
    },
    trophyLemons: {
      type: Sequelize.INTEGER,
    },
   
  });
  return Trophy;
};
