'use strict';

const SummaryPageBehaviour = require('hof').components.summary;

module.exports = {
  name: 'rod',
  steps: {
    '/start': {
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
