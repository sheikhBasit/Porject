// routes/bookingRoutes.js

const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middleware/auth');
const Booking = require('../models/Booking');

// Booking CRUD routes

router.get('/', authenticate, authorize('admin'), (req, res) => {
  // Fetch all bookings (admin only)
});

router.post('/', authenticate, (req, res) => {
  // Create a new booking
});

// Other booking routes...

module.exports = router;
