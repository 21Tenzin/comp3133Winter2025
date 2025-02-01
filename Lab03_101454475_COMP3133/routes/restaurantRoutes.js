const express = require('express');
const Restaurant = require('../models/Restaurant');
const router = express.Router();

//  GET all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET restaurants by cuisine
router.get('/cuisine/:type', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ cuisine: req.params.type });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  GET restaurants sorted by restaurant_id
router.get('/sorted', async (req, res) => {
  try {
    const sortBy = req.query.sortBy === 'ASC' ? 1 : -1;
    const restaurants = await Restaurant.find({})
      .select('restaurant_id name cuisine city')
      .sort({ restaurant_id: sortBy });

    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  GET restaurants where cuisine is 'Delicatessen' and NOT in 'Brooklyn'
router.get('/delicatessen', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      cuisine: 'Delicatessen',
      city: { $ne: 'Brooklyn' }
    })
    .select('name cuisine city -_id')
    .sort({ name: 1 });

    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
