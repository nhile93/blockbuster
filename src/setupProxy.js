const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/components',
    createProxyMiddleware({
      target: 'https://api.trakt.tv/',
      changeOrigin: true,
    })
  );
};