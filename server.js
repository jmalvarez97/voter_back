const { Sequelize } = require('sequelize');

const db = new Sequelize('postgres://db_rate_clubes_user:iKlg60z4QIYWCXAQWJGP9OPKK2HINZWz@dpg-cgh4pb7dvk4ml9siu9ug-a.oregon-postgres.render.com/db_rate_clubes?ssl=true');

module.exports = db;