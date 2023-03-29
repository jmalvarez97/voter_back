const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.NAME_DB, process.env.USERNAME_DB, process.env.PASSWORD_DB, {
    host: process.env.HOSTNAME_DB,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
          require: 'true'
        }
      }
  });

module.exports = db;