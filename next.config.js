module.exports = {
  experimental: {
    appDir: true,
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
    };
    return config;
  },
  env: {
    apiBaseUrl: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  },
};
