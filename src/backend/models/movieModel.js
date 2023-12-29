// models/Movie.js

const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: String,
  description: String,
  releaseDate: Date,
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
