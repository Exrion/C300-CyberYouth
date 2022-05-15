module.exports = {
  HOST: "localhost",
  USER: "c300",
  PASSWORD: "c300_password",
  DB: "mydb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
