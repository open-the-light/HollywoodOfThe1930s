const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    ['/actors', '/test', '/api'],
    createProxyMiddleware({
      target: 'http://localhost:5000',
    })
  );
};
