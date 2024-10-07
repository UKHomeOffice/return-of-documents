'use strict';

const SummaryPageBehaviour = require('hof').components.summary;

module.exports = {
  name: 'report-documents-not-received',
  confirmStep: '/documents-not-received-confirm',
  steps: {
    '/documents-not-received-start': {
      next: '/documents-not-received-main-applicant'
    },
    '/documents-not-received-main-applicant': {
      next: '/documents-not-received-application'
    },
    '/documents-not-received-application': {
      fields: ['dnr-application-type'],
      forks: [
        {
          target: '/documents-not-received-visa-type',
          condition: {
            field: 'dnr-application-type',
            value: 'dnr-visa'
          }
        },
        {
          target: '/documents-not-received-further-leave',
          condition: {
            field: 'dnr-application-type',
            value: 'dnr-further-leave'
          }
        }
      ],
      next: '/documents-not-received-reference-number'
    },
    '/documents-not-received-visa-type': {
      next: '/documents-not-received-reference-number'
    },
    '/documents-not-received-further-leave': {
      next: '/documents-not-received-reference-number'
    },
    '/documents-not-received-reference-number': {
      next: '/documents-not-received-contact-details'
    },
    '/documents-not-received-contact-details': {
      next: '/documents-not-received-confirm'
    },
    '/documents-not-received-confirm': {
      behaviours: [SummaryPageBehaviour],
      sections: require('./sections/summary-data-sections'),
      next: '/report-confirmation'
    },
    '/report-confirmation': {
      backLink: false,
      template: 'confirmation',
      clearSession: true
    }
  }
};
