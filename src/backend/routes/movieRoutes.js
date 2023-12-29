// routes/movieRoutes.js

const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');
const Movie = require('../models/Movie');

// Movie CRUD routes

router.get('/', authenticate, (req, res) => {
  // Fetch all movies
});

router.post('/', authenticate, authorize('admin'), (req, res) => {
  // Create a new movie
});

// Other movie routes...

module.exports = router;
