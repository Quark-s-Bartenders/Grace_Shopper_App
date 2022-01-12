const router = require('express').Router();
const {
  models: { PokeBall }
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const pokeBalls = await PokeBall.findAll({
      attributes: ['name', 'image', 'price', 'description', 'quantity']
    });
    res.json(pokeBalls);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const pokeBall = await PokeBall.findByPk(req.params.id);
    res.json(pokeBall);
  } catch (err) {
    next(err);
  }
});
