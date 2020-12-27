const mongoose = require('mongoose');
const keys = require('../config/keys');
const axios = require('axios');

const Movie = mongoose.model('movies');

const movieEndPoint = 'https://api.themoviedb.org/3/search/movie';
const idEndPoint = 'https://api.themoviedb.org/3/movie';

module.exports = (app) => {
  app.get('/api/search_movie', async (req, res) => {
    const data = await axios.get(movieEndPoint, {
      params: {
        api_key: keys.tmdb_key,
        query: 'Jack Reacher',
      },
    });
    console.log(data);
  });

  app.get('/api/get_movie_by_id', async (req, res) => {
    const data = await Movie.findOne({ id: req.query.id });
    res.send(data);
  });

  app.get('/api/get_movie_by_title', async (req, res) => {
    const data = await axios.get(movieEndPoint, {
      params: {
        api_key: keys.tmdb_key,
        query: req.query.title,
      },
    });
    res.send(
      data.data.results.filter(
        (m) => m.release_date === req.query.release_date
      )[0]
    );
  });

  app.get('/api/get_movie_by_tmdb_id', async (req, res) => {
    console.log(req.query.id);
    const data = await axios.get(
      `https://api.themoviedb.org/3/movie/${req.query.id}`,
      {
        params: {
          api_key: keys.tmdb_key,
        },
      }
    );
    res.send(data.data);
  });
};
