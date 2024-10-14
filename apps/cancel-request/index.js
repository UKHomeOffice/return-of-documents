'use strict';

const SummaryPageBehaviour = require('hof').components.summary;

module.exports = {
  name: 'cancel-request',
  baseUrl: '/',
  steps: {
    '/cancel-request-start': {},
    '/cancel-request-main-applicant': {
      backLink: 'cancel-request-start',
      fields: [
        'cnc-main-applicant-full-name',
        'cnc-main-applicant-dob',
        'cnc-main-applicant-nationality'
      ],
      next: '/cancel-request-who-completed-form'
    },
    '/cancel-request-who-completed-form': {
      fields: ['cnc-who-is-completing'],
      forks: [
        {
          target: '/cancel-request-who-representing',
          condition: {
            field: 'cnc-who-is-completing',
            value: 'legal-rep'
          },
          continueOnEdit: false
        },
        {
          target: '/cancel-request-sponsor-type',
          continueOnEdit: true,
          condition: {
            field: 'cnc-who-is-completing',
            value: 'sponsor'
          }
        },
        {
          target: '/cancel-request-dependant-or-guardian',
          continueOnEdit: true,
          condition: {
            field: 'cnc-who-is-completing',
            value: 'guardian'
          }
        }
      ],
      next: '/cancel-request-application'
    },
    '/cancel-request-who-representing': {
      fields: ['cnc-who-is-representing'],
      next: '/cancel-request-application'
    },
    '/cancel-request-sponsor-type': {
      fields: ['cnc-sponsor-type'],
      next: '/cancel-request-application'
    },
    '/cancel-request-dependant-or-guardian': {
      fields: ['cnc-dependant-or-guardian'],
      next: '/cancel-request-application'
    },
    '/cancel-request-application': {
      forks: [
        {
          target: '/cancel-request-visa-type',
          condition: {
            field: 'cnc-reason-for-application',
            value: 'cnc-visa'
          }
        },
        {
          target: '/cancel-request-further-leave',
          continueOnEdit: true,
          condition: {
            field: 'cnc-reason-for-application',
            value: 'cnc-leave-to-remain'
          }
        }
      ],
      next: '/cancel-request-reference-number'
    },
    '/cancel-request-reference-number': {
      fields: [
        'cnc-reference-number',
        'enter-record-number',
        'enter-case-id',
        'enter-ho-reference-number',
        'enter-payment-reference-number',
        'enter-courier-reference-number'
      ],
      next: '/cancel-request-contact-details'
    },
    '/cancel-request-contact-details': {
      next: '/cancel-request-confirm'
    },
    '/cancel-request-confirm': {
      next: '/cancellation-received'
    },
    '/cancel-request-visa-type': {
      fields: ['cnc-application-visa-type'],
      next: '/cancel-request-reference-number'
    },
    '/cancel-request-further-leave': {
      fields: ['cnc-further-leave-to-remain'],
      next: '/cancel-request-reference-number'
    },
    '/confirm': {
      behaviours: [SummaryPageBehaviour],
      sections: require('./sections/summary-data-sections'),
      next: '/cancellation-received'
    },
    '/cancellation-received': {
      clearSession: true
    }
  }
};
