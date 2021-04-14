const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

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

db.tipo = require("./tipo.model.js")(sequelize, Sequelize);
db.uf = require("./uf.model.js")(sequelize, Sequelize);
db.cidade = require("./cidade.model.js")(sequelize, Sequelize);
db.contrato = require("./contrato.model.js")(sequelize, Sequelize);
db.prestador = require("./prestador.model.js")(sequelize, Sequelize);



module.exports = db;