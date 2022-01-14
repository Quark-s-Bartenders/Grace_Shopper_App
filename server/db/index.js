// database access point
const db = require('./db');
const User = require('./models/User');
const PokeBall = require('./models/PokeBall');
const Order = require('./models/Order');

// association table

// user - order relationship
User.hasMany(Order);
Order.belongsTo(User);

// poke ball - order relationship
PokeBall.belongsToMany(Order, { through: 'PokeBall_Orders' });
Order.belongsToMany(PokeBall, { through: 'PokeBall_Orders' });

// NOTE: for the many-to-many relationships, we still need to incorporate user id data into PokeBall_Orders through table

module.exports = {
  db,
  models: {
    User,
    PokeBall,
    Order
  }
};
