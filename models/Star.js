const mongoose = require('mongoose');
const { Schema } = mongoose;

const starSchema = new Schema({
  id: Number,
  fullName: String,
  firstName: String,
  lastName: String,
  bornName: String,
  born: String,
  died: String,
  image: String,
  link: String,
  tmdb_id: Number,
  featured: Number,
});

mongoose.model('stars', starSchema);
