'use strict';

const SummaryPageBehaviour = require('hof').components.summary;

module.exports = {
  name: 'rod',
  steps: {
    '/start': {
    },
    '/who-completing': {
      forks: [
        {
          target: '/application',
          condition: {
            field: 'who-is-completing',
            value: 'main-applicant'
          },
          continueOnEdit: false
        },
        {
          target: '/who-representing',
          continueOnEdit: true,
          condition: {
            field: 'who-is-completing',
            value: 'who-is-rep'
          }
        },
        {
          target: '/sponsor-type',
          continueOnEdit: true,
          condition: {
            field: 'who-is-completing',
            value: 'sponsor'
          }
        },
        {
          target: '/dependant-or-guardian',
          continueOnEdit: true,
          condition: {
            field: 'who-is-completing',
            value: 'guardian'
          }
        }
      ],
      fields: ['who-is-completing'],
      next: '/application'
    },
    '/who-representing': {

      next: '/legal-representation'
    },
    '/legal-representation': {

      next: '/application'
    },
    '/sponsor-type': {
      next: '/application'
    },
    '/dependant-or-guardian': {
      next: '/application'
    },
    '/application': {
      forks: [
        {
          target: '/visa-type',
          condition: {
            field: 'application-type',
            value: 'visa'
          },
          continueOnEdit: false
        },
        {
          target: '/about-application', // logic required
          continueOnEdit: true,
          condition: {
            field: 'application-type',
            value: 'british-citizen'
          }
        },
        {
          target: '/further-leave',
          continueOnEdit: true,
          condition: {
            field: 'application-type',
            value: 'further-leave'
          }
        },
        {
          target: '/about-application', // logic required
          continueOnEdit: true,
          condition: {
            field: 'application-type',
            value: 'not-time-limit'
          }
        },
        {
          target: '/about-application', // logic required
          continueOnEdit: true,
          condition: {
            field: 'application-type',
            value: 'eu-settlement-scheme'
          }
        },
        {
          target: '/about-application', // logic required
          continueOnEdit: true,
          condition: {
            field: 'application-type',
            value: 'settlement'
          }
        },
        {
          target: '/about-application', // logic required
          continueOnEdit: true,
          condition: {
            field: 'application-type',
            value: 'limited-leave-replacement-brp'
          }
        }
      ],
      fields: ['application-type'],
      next: '/visa-type'
    },
    '/visa-type': {  // logic required
      next: '/about-application'
    },
    '/further-leave': { // //logic required
      next: '/about-application'
    },
    '/about-application': { // Should hold a logic before access to this page
      forks: [
        {
          target: '/cancelling-application',
          condition: {
            field: 'is-cancel-application',
            value: 'yes'
          },
          continueOnEdit: false
        },
        {
          target: '/main-applicant-passport',
          condition: {
            field: 'is-cancel-application',
            value: 'no'
          },
          continueOnEdit: false
        }
      ],
      fields: ['is-cancel-application'],
      next: '/cancelling-application'
    },
    '/cancelling-application': { // Should hold a logic before access to this page
      next: '/reference-number'
    },

    '/main-applicant-passport': { // Should hold a logic before access to this page
      forks: [
        {
          target: '/proof-of-identity',
          condition: {
            field: 'is-requesting-passport-to-travel',
            value: 'yes'
          },
          continueOnEdit: false
        },
        {
          target: '/cannot-travel',
          condition: {
            field: 'is-requesting-passport-to-travel',
            value: 'no'
          },
          continueOnEdit: false
        }
      ],
      fields: ['is-requesting-passport-to-travel'],
      next: '/cancelling-application'
    },
    '/cannot-travel': {
      next: '/reference-number'
    },

    '/proof-of-identity': {

    },

    '/reference-number': {

      next: '/your-documents'
    },
    '/your-documents': {

      next: '/main-applicant-postcode'
    },
    '/main-applicant-postcode': {

      next: '/main-applicant-address-results'
    },
    '/main-applicant-address-results': {

      next: '/reuse-main-applicant-address'
    },
    '/enter-main-applicant-address': {

      next: '/reuse-main-applicant-address'
    },
    '/reuse-main-applicant-address': {
      forks: [
        {
          target: '/contact-details',
          condition: {
            field: 'is-passport-return-address',
            value: 'yes'
          },
          continueOnEdit: false
        },
        {
          target: '/delivery-postcode',
          condition: {
            field: 'is-passport-return-address',
            value: 'no'
          },
          continueOnEdit: false
        }
      ],
      fields: ['is-passport-return-address'],
      next: '/contact-details'
    },
    '/delivery-postcode': {

      next: '/select-delivery-address'
    },
    '/select-delivery-address': {

      next: '/contact-details'
    },
    '/enter-delivery-address': {

      next: '/contact-details'
    },
    '/contact-details': {

      next: '/extra-notes'
    },
    '/extra-notes': {

      next: '/confirm'
    },
    '/confirm': {
      behaviours: [SummaryPageBehaviour],
      sections: require('./sections/summary-data-sections'),
      next: '/declaration'
    },
    '/declaration': {
      next: '/confirmation'
    },
    '/confirmation': {
      clearSession: true
    }
  }
};
