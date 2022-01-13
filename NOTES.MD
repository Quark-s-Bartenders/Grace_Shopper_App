### USER MODEL

- need to test bool data type for isAdmin
- need to research validation for phone number && cc info
- need to research whether or not cart (and possibly transaction history) info needs to be added to model, as well as how to handle if array (data type)
  -LOOK UP ENUM IN PLACE OF BOOLEAN

### POKEBALL MODEL

- need to update price type back to INTEGER
- need to complete image library

### SEED

- update file populate full db modles
- SEED ENTIRE DB: const seed = async () => {
  try {
  await db.sync({ force: true });
  await Promise.all(
  campuses.map((campus) => {
  return Campus.create(campus);
  })
  );
  await Promise.all(
  students.map((student) => {
  return Student.create(student);
  })
  );
  // seed your database here!
  } catch (err) {
  console.log(red(err));
  }
  };
