module.exports = {
  HOST: "localhost",
  USER: "c300",
  PASSWORD: "c300_cyberyouth",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};