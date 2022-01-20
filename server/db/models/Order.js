const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  isProcessed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  productId: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  totalPrice: {
    type: Sequelize.DECIMAL,
    defaultValue: 0.0,
    allowNull: false
  }
})

module.exports = Order
