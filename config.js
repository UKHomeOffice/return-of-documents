'use strict';
const env = process.env.NODE_ENV || 'production';

module.exports = {
  env: env,
  dataDirectory: './data',
  govukNotify: {
  },
  survey: {
    urls: {
      root: 'https://www.hof-feedback.homeoffice.gov.uk'
    }
  },
  redis: {
    port: process.env.REDIS_PORT || '6379',
    host: process.env.REDIS_HOST || '127.0.0.1'
  }
};
