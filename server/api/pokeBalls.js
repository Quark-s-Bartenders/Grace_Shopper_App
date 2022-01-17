const express = require('express');
const router = require('express').Router();
const PokeBall = require('../db/models/PokeBall');

// get all Poke Balls
router.get('/', async (req, res, next) => {
  try {
    const allBalls = await PokeBall.findAll();
    res.json(allBalls);
  } catch (err) {
    next(err);
  }
});

// get a Poke Ball by ID
router.get('/:id', async (req, res, next) => {
  try {
    const pokeBall = await PokeBall.findByPk(req.params.id);
    res.json(pokeBall);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
