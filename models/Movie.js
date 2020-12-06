const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
  id: Number,
  title: String,
  year: Number,
  tmdb_id: Number,
  poster: String,
  screenshot: String,
  link: String,
});

mongoose.model('movies', movieSchema);
