const env = process.env.ENV;
console.log(`Running on ${env} env`)

const dev = {
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
}

const prod = {
  HOST: process.env.PROD_DB_HOST,
  USER: process.env.PROD_DB_USER,
  PASSWORD: process.env.PROD_DB_PASS,
  DB: process.env.PROD_DB_NAME,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}

const config = {
  dev,
  prod
 };

module.exports = config[env];