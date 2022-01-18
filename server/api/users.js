const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let user = await User.findByPk(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const userToDelete = await User.findByPk(req.params.id);
    if (userToDelete) {
      res.send(userToDelete);
      await userToDelete.destroy();
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const {
      username,
      password,
      firstName,
      lastName,
      address,
      city,
      state,
      postalCode,
      phone,
      isAdmin,
      ccNum,
      cvv,
    } = req.body;
    let user = await User.create({
      username,
      password,
      firstName,
      lastName,
      address,
      city,
      state,
      postalCode,
      phone,
      isAdmin,
      ccNum,
      cvv,
    });
    user = await user.reload();
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const {
      username,
      password,
      firstName,
      lastName,
      address,
      city,
      state,
      postalCode,
      phone,
      isAdmin,
      ccNum,
      cvv,
    } = req.body;
    const user = await User.findByPk(req.params.id);

    const updatedUser = await user.update({
      username,
      password,
      firstName,
      lastName,
      address,
      city,
      state,
      postalCode,
      phone,
      isAdmin,
      ccNum,
      cvv,
    });
    res.send(updatedUser);
  } catch (error) {
    next(error);
  }
});
