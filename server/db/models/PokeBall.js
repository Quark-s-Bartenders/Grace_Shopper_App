const Sequelize = require('sequelize');
const db = require('../db');

const PokeBall = db.define('pokeBall', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: '../../../../public/images/image-coming-soon.jpeg'
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: 'Check back soon for more info!'
  }
});

module.exports = PokeBall;
