const express = require("express");
const router = require("express").Router();

const {
  models: { Order },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    let orders = await Order.findAll();
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { isProcessed } = req.body;
    let order = await Order.create({
      isProcessed
    });
    order = await order.reload();
    res.json(order);
  } catch (error) {
    next(error);
  }
});