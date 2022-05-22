module.exports = (sequelize, Sequelize) => {
  const Exchange = sequelize.define("exchange", {
    exchangeName: {
      type: Sequelize.STRING,
    },
    exchangeDescription: {
      type: Sequelize.STRING,
    },
    exchangeImg: {
      type: Sequelize.STRING,
    },
    lemonsEach: {
      type: Sequelize.INTEGER,
    },
    deliveryMode: {
      type: Sequelize.STRING,
    },
    exchangeStock: {
      type: Sequelize.INTEGER,
    },
   
  });
  return Exchange;
};
