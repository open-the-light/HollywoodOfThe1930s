const mongoose = require('mongoose');

const Star = mongoose.model('stars');

module.exports = (app) => {
  app.get('/api/get_star', async (req, res) => {
    const star = await Star.findOne({ id: req.query.id });
    res.send(star);
  });

  app.get('/api/get_featured_list', async (req, res) => {
    const data = await Star.find({ featured: 1 });
    res.send(data);
  });

  app.get('/api/get_all_stars', async (req, res) => {
    const stars = await Star.find();
    console.log(stars[0].lastName);
    res.send(stars.sort((a, b) => (a.lastName > b.lastName ? 1 : -1)));
  });

  app.get('/test', (req, res) => {
    console.log(req);
  });
};
