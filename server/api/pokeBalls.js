const express = require("express");
const router = require("express").Router();

const {
  models: { PokeBall },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    let allBalls = await PokeBall.findAll();
    res.json(allBalls);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let pokeBall = await PokeBall.findByPk(req.params.id);
    res.json(pokeBall);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const ballToDelete = await PokeBall.findByPk(req.params.id);
    if (ballToDelete) {
      res.send(ballToDelete);
      await ballToDelete.destroy();
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
    const { name, image, price, quantity, description } = req.body;
    let ball = await PokeBall.create({
      name,
      image,
      price,
      quantity,
      description,
    });
    ball = await ball.reload();
    res.json(ball);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { name, image, price, quantity, description } = req.body;
    const ball = await PokeBall.findByPk(req.params.id);

    const updatedBall = await ball.update({
      name,
      image,
      price,
      quantity,
      description,
    });
    res.send(updatedBall);
  } catch (error) {
    next(error);
  }
});
