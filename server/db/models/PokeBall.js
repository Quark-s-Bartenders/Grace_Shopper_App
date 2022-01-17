const Sequelize = require('sequelize');
const db = require('../db');

const PokeBall = db.define('pokeBall', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    required: true
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: '../../../../images/image-coming-soon.jpeg'
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
    required: true
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    required: true
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: 'Check back soon for more info!'
  }
});

module.exports = PokeBall;
