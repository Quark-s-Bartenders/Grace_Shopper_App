const {
  db,
  models: { User, PokeBall, Order }
} = require('../server/db');

let users = [
  {
    username: 'israel',
    password: '12345',
    firstName: 'Israel',
    lastName: 'Lund',
    address: '1212 Front St.',
    city: 'New York',
    state: 'NY',
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
    address: '419 Raze St',
    city: 'San Francisco',
    state: 'CA',
    postalCode: 90210,
    phone: '409-420-6969',
    isAdmin: true,
    ccNum: 1235,
    cvv: 620
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

    //POKEBALL SEED DATA
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
        name: 'Dark Ball',
        image: 'images/genericBall.png',
        price: 66.66,
        quantity: 1000,
        description:
          'A special Poké Ball that is able to catch Pokémon that already belong to a Trainer, as opposed to catching wild Pokémon only.'
      }),
      PokeBall.create({
        name: 'Dive Ball',
        image: 'images/diveBall.png',
        price: 9.99,
        quantity: 1000,
        description:
          'A somewhat different Poké Ball that works especially well when catching Pokémon that live underwater.'
      }),
      PokeBall.create({
        name: 'Dream Ball',
        image: 'images/dreamBall.png',
        price: 9.99,
        quantity: 1000,
        description:
          "A somewhat different Poké Ball that makes it easier to catch wild Pokémon while they're asleep."
      }),
      PokeBall.create({
        name: 'Dusk Ball',
        image: 'images/duskBall.png',
        price: 9.99,
        quantity: 1000,
        description:
          'A somewhat different Poké Ball that makes it easier to catch wild Pokémon at night or in dark places such as caves.'
      }),
      PokeBall.create({
        name: 'Fast Ball',
        image: 'images/fastBall.png',
        price: 2.99,
        quantity: 1000,
        description:
          'A Poké Ball that makes it easier to catch Pokémon that are usually very quick to run away.'
      }),
      PokeBall.create({
        name: 'Friend Ball',
        image: 'images/friendBall.png',
        price: 2.99,
        quantity: 1000,
        description:
          'A strange Poké Ball that will make the wild Pokémon caught with it more friendly toward you immediately.'
      }),
      PokeBall.create({
        name: 'Great Ball',
        image: 'images/greatBall.png',
        price: 5.99,
        quantity: 1000,
        description:
          'A good, high-performance Poké Ball that provides a higher Pokémon catch rate than a standard Poké Ball can.'
      }),
      PokeBall.create({
        name: 'GS Ball',
        image: 'images/gsBall.png',
        price: 999.99,
        quantity: 1000,
        description: 'A very, very mysterious Poké Ball.'
      }),
      PokeBall.create({
        name: 'Heal Ball',
        image: 'images/healBall.png',
        price: 2.99,
        quantity: 1000,
        description:
          'A remedial Poké Ball that restores the HP of a Pokémon caught with it and eliminates any status conditions.'
      }),
      PokeBall.create({
        name: 'Heavy Ball',
        image: 'images/heavyBall.png',
        price: 2.99,
        quantity: 1000,
        description: 'A Poké Ball that is better than usual at catching very heavy Pokémon.'
      }),
      PokeBall.create({
        name: 'Level Ball',
        image: 'images/levelBall.png',
        price: 2.99,
        quantity: 1000,
        description:
          'A Poké Ball that makes it easier to catch Pokémon that are at a lower level than your own Pokémon.'
      }),
      PokeBall.create({
        name: 'Love Ball',
        image: 'images/loveBall.png',
        price: 2.99,
        quantity: 1000,
        description:
          'A Poké Ball that works best when catching a Pokémon that is of the opposite gender of your Pokémon.'
      }),
      PokeBall.create({
        name: 'Lure Ball',
        image: 'images/lureBall.png',
        price: 2.99,
        quantity: 1000,
        description:
          'A Poké Ball that is good for catching Pokémon that you reel in with a rod while out fishing.'
      }),
      PokeBall.create({
        name: 'Luxury Ball',
        image: 'images/luxuryBall.png',
        price: 9.99,
        quantity: 1000,
        description:
          'A particularly comfortable Poké Ball that makes a wild Pokémon quickly grow friendlier after being caught.'
      }),
      PokeBall.create({
        name: 'Master Ball',
        image: 'images/masterBall.png',
        price: 199.99,
        quantity: 1000,
        description:
          'The best Poké Ball with the ultimate level of performance. With it, you will catch any wild Pokémon without fail.'
      }),
      PokeBall.create({
        name: 'Moon Ball',
        image: 'images/moonBall.png',
        price: 2.99,
        quantity: 1000,
        description:
          'A Poké Ball that will make it easier to catch Pokémon that can evolve using a Moon Stone.'
      }),
      PokeBall.create({
        name: 'Nest Ball',
        image: 'images/nestBall.png',
        price: 9.99,
        quantity: 1000,
        description:
          'A somewhat different Poké Ball that becomes more effective the lower the level of the wild Pokémon.'
      }),
      PokeBall.create({
        name: 'Net Ball',
        image: 'images/netBall.png',
        price: 9.99,
        quantity: 1000,
        description:
          'A somewhat different Poké Ball that is more effective when attempting to catch Water- or Bug-type Pokémon.'
      }),
      PokeBall.create({
        name: 'Park Ball',
        image: 'images/parkBall.png',
        price: 29.99,
        quantity: 1000,
        description: 'A special Poké Ball for use in Pal Park.'
      }),
      PokeBall.create({
        name: 'Poké Ball',
        image: 'images/pokeBall.png',
        price: 1.99,
        quantity: 1000,
        description:
          "A device for catching wild Pokémon. It's thrown like a ball at a Pokémon, comfortably encapsulating its target."
      }),
      PokeBall.create({
        name: 'Premier Ball',
        image: 'images/premierBall.png',
        price: 19.99,
        quantity: 1000,
        description:
          'A somewhat rare Poké Ball that has been specially made to commemorate an event of some sort.'
      }),
      PokeBall.create({
        name: 'Quick Ball',
        image: 'images/quickBall.png',
        price: 9.99,
        quantity: 1000,
        description:
          'A somewhat different Poké Ball that has a more successful catch rate if used at the start of a wild encounter.'
      }),
      PokeBall.create({
        name: 'Repeat Ball',
        image: 'images/repeatBall.png',
        price: 9.99,
        quantity: 1000,
        description:
          'A somewhat different Poké Ball that works especially well on Pokémon species that have been caught before.'
      }),
      PokeBall.create({
        name: 'Safari Ball',
        image: 'images/safariBall.png',
        price: 4.99,
        quantity: 1000,
        description:
          'A special Poké Ball that is used only in the Great Marsh. It is recognizable by the camouflage pattern decorating it.'
      }),
      PokeBall.create({
        name: 'Snag Ball',
        image: 'images/genericBall.png',
        price: 24.99,
        quantity: 1000,
        description:
          'A type of modified Poké Ball that has been turned into a Snag Ball by use of a Snag Machine. The Snag Ball is the only type of Poké Ball which can snag an already caught Pokémon.'
      }),
      PokeBall.create({
        name: 'Sport Ball',
        image: 'images/sportBall.png',
        price: 2.99,
        quantity: 1000,
        description: 'A special Poké Ball that is used during the Bug-Catching Contest.'
      }),
      PokeBall.create({
        name: 'Timer Ball',
        image: 'images/timerBall.png',
        price: 9.99,
        quantity: 1000,
        description:
          'A somewhat different Poké Ball that becomes progressively more effective at catching Pokémon the more turns that are taken in battle.'
      }),
      PokeBall.create({
        name: 'Ultra Ball',
        image: 'images/ultraBall.png',
        price: 11.99,
        quantity: 1000,
        description:
          'An ultra-high performance Poké Ball that provides a higher success rate for catching Pokémon than a Great Ball.'
      })
    ]);

    const users = await Promise.all([
      User.create({
        username: 'israel',
        password: '12345',
        firstName: 'Israel',
        lastName: 'Lund',
        address: '1212 Front St.',
        city: 'New York',
        state: 'NY',
        postalCode: 10002,
        phone: '718-555-6980',
        isAdmin: true,
        ccNum: 123,
        cvv: 222
      }),
      User.create({
        username: 'SamG',
        password: '12345',
        firstName: 'Sam',
        lastName: 'Greenberg',
        address: 'Street Blvd',
        city: 'Big City',
        state: 'PA',
        postalCode: 12345,
        phone: '012-345-6789',
        isAdmin: true,
        ccNum: 1234,
        cvv: 123
      }),
      User.create({
        username: 'Justin',
        password: '55555',
        firstName: 'Justin',
        lastName: 'Kim',
        address: '419 Raze St',
        city: 'San Francisco',
        state: 'CA',
        postalCode: 90210,
        phone: '409-420-6969',
        isAdmin: true,
        ccNum: 1235,
        cvv: 620
      }),
      User.create({
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
      }),
      User.create({
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
      }),
      User.create({
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
      })
    ]);
    return [pokeballs, users];
    console.log(`Poke Balls and Users`);
  } catch (err) {
    console.log(err);
  }
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
