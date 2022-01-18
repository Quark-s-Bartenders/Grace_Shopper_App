const pokeBalls = require('../pokeball.js');
const {
  db,
  models: { User, PokeBall, Order }
} = require('../server/db');

let admins = [
  {
    username: 'israel',
    password: '12345',
    firstName: 'Israel',
    lastName: 'Lund',
    address: '1212 Front St.',
    city: 'New York',
    state: 'New York',
    postalCode: 10002,
    phone: '718-555-6980',
    isAdmin: true,
    ccNum: 123,
    cvv: 222
  },
  {
    username: 'SamG',
    password: '12345',
    firstName: 'Sam',
    lastName: 'Greenberg',
    address: 'Street Blvd',
    city: 'Big City',
    state: 'Panic',
    postalCode: 12345,
    phone: '012-345-6789',
    isAdmin: true,
    ccNum: 1234,
    cvv: 123
  },
  {
    username: 'Justin',
    password: '55555',
    firstName: 'Justin',
    lastName: 'Kim',
    address: '420 Blaze St',
    city: 'San Francisco',
    state: 'Cali',
    postalCode: 90210,
    phone: '420-420-6969',
    isAdmin: true,
    ccNum: 1235,
    cvv: 420
  },
  {
    username: 'SamK',
    password: '12345',
    firstName: 'Sam',
    lastName: 'Kanan',
    address: '666 Windy City Lane',
    city: 'Chicago',
    state: 'IL',
    postalCode: 60607,
    phone: '312-345-0000',
    isAdmin: true,
    ccNum: 1236,
    cvv: 123
  },
  {
    username: 'AMY1212',
    password: '7777',
    firstName: 'Amy',
    lastName: 'Winehouse',
    address: '5150 Singer St.',
    city: 'New York',
    state: 'NY',
    postalCode: 60009,
    phone: '312-345-0404',
    isAdmin: false,
    ccNum: 19999,
    cvv: 200
  },
  {
    username: 'OliviaIsGreat',
    password: '490000',
    firstName: 'Olivia',
    lastName: 'Fischer',
    address: '75 Oil Lane',
    city: 'Dallas',
    state: 'TX',
    postalCode: 85643,
    phone: '312-204-3564',
    isAdmin: false,
    ccNum: 1239690,
    cvv: 888
  }
];

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

async function seed() {
  try {
    await db.sync({ force: true }); // clears db and matches models to tables
    console.log('db synced!');

    const pokeballs = await Promise.all([
      PokeBall.create({
        name: 'Beast Ball',
        image: 'images/genericBall.png',
        price: 9.99,
        quantity: 10,
        description:
          'A special Poké Ball designed to catch Ultra Beasts. It has a low success rate for catching others.'
      }),
      PokeBall.create({
        name: 'Cherish Ball',
        image: 'images/cherishBall.png',
        price: 29.99,
        quantity: 100,
        description:
          'A quite rare Poké Ball that has been specially crafted to commemorate an occasion of some sort.'
      }),
      PokeBall.create({
        name: 'Dive Ball',
        image: 'images/diveBall.png',
        price: 9.99,
        quantity: 1000,
        description:
          'A somewhat different Poké Ball that works especially well when catching Pokémon that live underwater.'
      })
    ]);
    return [pokeballs];
    console.log(`seeded admins and Poke Balls`);
  } catch (err) {
    console.log(red(err));
  }

  //Creating Users
  // try {
  //   await Promise.all(
  //     admins.map((admin) => {
  //       User.create({
  //         username: admin.username,
  //         password: admin.password
  //         // firstName: admin.firstName,
  //         // lastName: admin.lastName,
  //         // address: admin.address,
  //         // city: admin.city,
  //         // state: admin.state,
  //         // postalCode: admin.postalCode,
  //         // phone: admin.phone,
  //         // isAdmin: admin.isAdmin,
  //         // ccNum: admin.ccNum,
  //         // cvv: admin.cvv
  //       });
  //     })
  //   );
  // } catch (error) {
  //   console.log(error);
  // }

  // try {
  //   await Promise.all(
  //     pokeBalls.map((ball) => {
  //       PokeBall.create({
  //         name: ball.name,
  //         image: ball.image,
  //         price: ball.price,
  //         quantity: ball.quantity,
  //         description: ball.description
  //       });
  //     })
  //   );
  // } catch (error) {
  //   console.log(error);
  // }
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
