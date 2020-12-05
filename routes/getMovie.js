const mongoose = require('mongoose');
const keys = require('../config/keys');
const axios = require('axios');

const movieEndPoint = 'https://api.themoviedb.org/3/search/movie';

module.exports = (app) => {
  app.get('/api/get_movie', async (req, res) => {
    const data = await axios.get(movieEndPoint, {
      params: {
        api_key: keys.tmdb_key,
        query: 'Jack Reacher',
      },
    });
    console.log(data.data.results[0]);
  });
};
