'use strict';

const SummaryPageBehaviour = require('hof').components.summary;

module.exports = {
  name: 'cancel-request',
  baseUrl: '/',
  steps: {
    '/cancel-request-start': {
      fields: ['name'],
      next: '/confirm'
    },
    
    '/confirm': {
      behaviours: [SummaryPageBehaviour],
      sections: require('./sections/summary-data-sections'),
      next: '/confirmation'
    },
    '/confirmation': {
      clearSession: true
    }
  }
};
