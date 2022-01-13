"use strict";
const pokeObject = require("../pokeball.js");

const {
  db,
  models: { User, PokeBall },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

let admins = [
  {
    username: "israel",
    password: "12345",
    firstName: "Israel",
    lastName: "Lund",
    address: "1212 Front St.",
    city: "New York",
    state: "New York",
    postalCode: 10002,
    phone: "718-555-6980",
    isAdmin: true,
    ccNum: 123,
    cvv: 222,
  },
  {
    username: "SamG",
    password: "12345",
    firstName: "Sam",
    lastName: "Greenberg",
    address: "Street Blvd",
    city: "Big City",
    state: "Panic",
    postalCode: 12345,
    phone: "012-345-6789",
    isAdmin: true,
    ccNum: 1234,
    cvv: 123,
  },
  {
    username: "Justin",
    password: "55555",
    firstName: "Justin",
    lastName: "Kim",
    address: "420 Blaze St",
    city: "San Francisco",
    state: "Cali",
    postalCode: 90210,
    phone: "420-420-6969",
    isAdmin: true,
    ccNum: 1235,
    cvv: 420,
  },
  {
    username: "SamK",
    password: "12345",
    firstName: "Sam",
    lastName: "Kanan",
    address: "666 Windy City Lane",
    city: "Chicago",
    state: "IL",
    postalCode: 10000,
    phone: "012-345-0000",
    isAdmin: true,
    ccNum: 1236,
    cvv: 123,
  },
];

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  try {
    await Promise.all(
      admins.map((admin) => {
        User.create({
          username: admin.username,
          password: admin.password,
          firstName: admin.firstName,
          lastName: admin.lastName,
          address: admin.address,
          city: admin.city,
          state: admin.state,
          postalCode: admin.postalCode,
          phone: admin.phone,
          isAdmin: admin.isAdmin,
          ccNum: admin.ccNum,
          cvv: admin.cvv,
        });
      })
    );
  } catch (error) {
    console.log(error);
  }
  //Creating Users

  try {
    await Promise.all(
      pokeObject.PokeBalls.map((ball) => {
        PokeBall.create({
          name: ball.name,
          image: ball.image,
          price: ball.price,
          quantity: ball.quantity,
          description: ball.description,
        });
      })
    );
  } catch (error) {
    console.log(error);
  }

  console.log(`seeded  users and  Poke Balls`);

  // console.log(`seeded successfully`);
  // return {
  //   users: {
  //     cody: users[0],
  //     murphy: users[1],
  //   },
  //   pokeBalls: {
  //     PokeBall: pokeBalls[0],
  //     PremierBall: pokeBalls[1],
  //   },
  // };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
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

// const seed = async () => {
//   try {
//     await db.sync({ force: true });
//     await Promise.all(
//       campuses.map((campus) => {
//         return Campus.create(campus);
//       })
//     );
//     await Promise.all(
//       students.map((student) => {
//         return Student.create(student);
//       })
//     );
//     // seed your database here!
//   } catch (err) {
//     console.log(red(err));
//   }
// };
