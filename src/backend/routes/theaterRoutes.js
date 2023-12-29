// routes/theaterRoutes.js

const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');
const Theater = require('../models/Theater');

// Theater CRUD routes

router.get('/', authenticate, (req, res) => {
  // Fetch all theaters
});

router.post('/', authenticate, authorize('admin'), (req, res) => {
  // Create a new theater
});

// Other theater routes...

module.exports = router;
