const db = require('./db');
const User = require('./models/User');
const PokeBall = require('./models/PokeBall');
const Order = require('./models/Order');

User.hasMany(Order);
Order.belongsTo(User);

PokeBall.belongsToMany(Order, { through: 'PokeBall_Orders' });
Order.belongsToMany(PokeBall, { through: 'PokeBall_Orders' });

module.exports = {
  db,
  models: {
    User,
    PokeBall,
    Order
  }
};
