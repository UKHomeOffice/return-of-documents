'use strict';
const env = process.env.NODE_ENV || 'production';

module.exports = {
  env: env,
  dataDirectory: './data',
  govukNotify: {

  },
  redis: {
    port: process.env.REDIS_PORT || '6379',
    host: process.env.REDIS_HOST || '127.0.0.1'
  }

};
