module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
    };
    return config;
  },
  env: {
    apiBaseUrl: "http://localhost:1337/api",
  },
};
