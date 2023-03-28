const { Sequelize } = require('sequelize');

const db = new Sequelize('db_clubes', 'db_clubes_user', process.env.PASSWORD_DB, {
    host: process.env.HOSTNAME_DB,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: 'true'
        }
      }
  });

module.exports = db;