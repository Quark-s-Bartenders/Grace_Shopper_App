const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  isProcessed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
})

// need to add qty & total (from pokeballs) to Order model

module.exports = Order
