//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const PokeBall = require('./models/PokeBall');

//associations could go here!
User.hasMany(PokeBall);
PokeBall.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    PokeBall
  }
};
