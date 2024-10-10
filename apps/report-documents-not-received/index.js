'use strict';

const SummaryPageBehaviour = require('hof').components.summary;

module.exports = {
  name: 'report-documents-not-received',
  confirmStep: '/documents-not-received-confirm',
  steps: {
    '/documents-not-received-start': {
    },
    '/documents-not-received-main-applicant': {
      backLink: 'documents-not-received-start',
      fields: ['dnr-full-name', 'dnr-dob', 'dnr-nationality'],
      next: '/documents-not-received-application'
    },
    '/documents-not-received-application': {
      forks: [
        {
          target: '/documents-not-received-visa-type',
          condition: {
            field: 'dnr-application-type',
            value: 'dnr-visa'
          },
          continueOnEdit: false
        },
        {
          target: '/documents-not-received-reference-number',
          continueOnEdit: true,
          condition: {
            field: 'dnr-application-type',
            value: 'dnr-british-citizen'
          }
        },
        {
          target: '/documents-not-received-further-leave',
          continueOnEdit: true,
          condition: {
            field: 'dnr-application-type',
            value: 'dnr-further-leave'
          }
        },
        {
          target: '/documents-not-received-reference-number',
          continueOnEdit: true,
          condition: {
            field: 'dnr-application-type',
            value: 'dnr-not-time-limit'
          }
        },
        {
          target: '/documents-not-received-reference-number',
          continueOnEdit: true,
          condition: {
            field: 'dnr-application-type',
            value: 'dnr-eu-settlement-scheme'
          }
        },
        {
          target: '/documents-not-received-reference-number',
          continueOnEdit: true,
          condition: {
            field: 'dnr-application-type',
            value: 'dnr-settlement'
          }
        },
        {
          target: '/documents-not-received-reference-number',
          continueOnEdit: true,
          condition: {
            field: 'dnr-application-type',
            value: 'dnr-limited-leave-replacement-brp'
          }
        }
      ],
      fields: ['dnr-application-type'],
      next: '/documents-not-received-visa-type'
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
      next: '/report-submitted'
    },
    '/report-submitted': {
      backLink: false,
      clearSession: true
    }
  }
};
