const mongoose = require('mongoose');
const starSearch = require('../services/starSearch');

const Star = mongoose.model('stars');

module.exports = (app) => {
  app.get('/api/get_star', async (req, res) => {
    const star = await Star.findOne({ id: 0 });
    res.send(star);
  });

  app.get('/api/get_featured_list', async (req, res) => {
    const data = await Star.find({ featured: 1 });
    res.send(data);
  });

  app.get('/test', (req, res) => {
    console.log(req);
  });
};
