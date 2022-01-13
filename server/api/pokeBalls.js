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
