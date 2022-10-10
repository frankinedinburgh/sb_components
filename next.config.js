module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
    };
    return config;
  },
  env: {
    apiBaseUrl: "http://warm-basin-81949.herokuapp.com/api",
  },
};
