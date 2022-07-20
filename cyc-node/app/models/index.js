const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.trophies = require("./trophy.model.js")(sequelize, Sequelize);
db.tiers = require("./tier.model.js")(sequelize, Sequelize);
db.tracks = require("./track.model.js")(sequelize, Sequelize);
db.announcements = require("./announcement.model.js")(sequelize, Sequelize);
db.exchanges = require("./exchange.model.js")(sequelize, Sequelize);
db.logbook = require("./logbook.model.js")(sequelize, Sequelize);


module.exports = db;