// models/Theater.js

const mongoose = require('mongoose');

const TheaterSchema = new mongoose.Schema({
  name: String,
  location: String,
  capacity: Number,
});

const Theater = mongoose.model('Theater', TheaterSchema);

module.exports = Theater;
