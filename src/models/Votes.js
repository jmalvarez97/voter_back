const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../server');


const Votes = db.define('Votes', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstTeam: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastTeam: {
    type: DataTypes.STRING,
    allowNull: false
  },
  winner: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
});

module.exports = Votes



