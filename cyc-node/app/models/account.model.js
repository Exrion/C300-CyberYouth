module.exports = (sequelize, Sequelize) => {
  const Account = sequelize.define("account", {
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    locked: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Account;
};
