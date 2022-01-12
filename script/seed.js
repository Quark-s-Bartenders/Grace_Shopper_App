'use strict';

const {
  db,
  models: { User, PokeBall }
} = require('../server/db');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');

  // Creating Users
  const users = await Promise.all([
    User.create({
      username: 'cody',
      password: '123',
      firstName: 'Cody',
      lastName: 'Pug',
      address: '123 S. Dog St.',
      city: 'New York City',
      state: 'NY',
      postalCode: 10002,
      phone: '555-555-5555'
    }),
    User.create({
      username: 'murphy',
      password: '123',
      firstName: 'Murphy',
      lastName: 'Mutt',
      address: '987 S. Cat Blvd.',
      city: 'New York City',
      state: 'NY',
      postalCode: 10002,
      phone: '666-666-6666'
    })
  ]);

  const pokeBalls = await Promise.all([
    PokeBall.create({
      name: 'Poké Ball',
      image: './public/images/pokeBall.png',
      price: '$2.00',
      quantity: 1000,
      description:
        "A device for catching wild Pokémon. It's thrown like a ball at a Pokémon, comfortably encapsulating its target."
    }),
    PokeBall.create({
      name: 'Premier Ball',
      image: './public/images/premierBall.png',
      price: 'Not For Individual Sale',
      quantity: 1000,
      description:
        'A somewhat rare Poké Ball that has been specially made to commemorate an event of some sort.'
    })
  ]);

  console.log(`seeded ${users.length} users and ${pokeBalls.length} Poke Balls`);
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    },
    pokeBalls: {
      PokeBall: pokeBalls[0],
      PremierBall: pokeBalls[1]
    }
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
