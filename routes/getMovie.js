const mongoose = require('mongoose');
const keys = require('../config/keys');
const axios = require('axios');

const Movie = mongoose.model('movies');

const movieEndPoint = 'https://api.themoviedb.org/3/search/movie';

module.exports = (app) => {
  app.get('/api/search_movie', async (req, res) => {
    const data = await axios.get(movieEndPoint, {
      params: {
        api_key: keys.tmdb_key,
        query: 'Jack Reacher',
      },
    });
    console.log(data.data.results[0]);
  });

  app.get('/api/get_movie_by_id', async (req, res) => {
    const data = await Movie.findOne({ id: req.query.id });
    res.send(data);
  });
};
