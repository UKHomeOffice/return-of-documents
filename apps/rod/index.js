'use strict';

const SummaryPageBehaviour = require('hof').components.summary;
const enableRelatedServicesMenu = require('./behaviours/related-services-menu');
const sponsorSelectionHandler = require('./behaviours/sponsor-selection-handler');
const customValidation = require('./behaviours/custom-validation');

module.exports = {
  name: 'rod',
  steps: {
    '/start': {
      behaviours: [enableRelatedServicesMenu]
    },
    '/who-completing': {
      behaviours: [sponsorSelectionHandler],
      fields: ['who-is-completing'],
      backLink: 'start',
      forks: [
        {
          target: '/application',
          condition: {
            field: 'who-is-completing',
            value: 'main-applicant'
          }
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
      next: '/application'
    },
    '/who-representing': {
      fields: ['who-is-representing'],
      next: '/legal-representation'
    },
    '/legal-representation': {
      fields: ['confirm-sent-letter-of-authority', 'legal-rep-name'],
      next: '/application'
    },
    '/sponsor-type': {
      fields: ['sponsor-type'],
      next: '/application'
    },
    '/dependant-or-guardian': {
      fields: ['dependant-or-guardian'],
      next: '/application'
    },
    '/application': {
      fields: ['application-type'],
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
          target: '/further-leave',
          continueOnEdit: true,
          condition: {
            field: 'application-type',
            value: 'further-leave'
          }
        }
      ],
      next: '/about-application'
    },
    '/about-application': {
      behaviours: [customValidation],
      continueOnEdit: true,
      fields: ['date-of-application', 'cancel-application' ],
      forks: [
        {
          target: '/cancelling-application',
          condition: {
            field: 'cancel-application',
            value: 'yes'
          }
        },
        {
          target: '/reference-number',
          condition: req => req.sessionModel.get('who-is-completing') === 'sponsor' ||
           (req.sessionModel.get('cancel-application') === 'no' &&
            (req.sessionModel.get('application-type') === 'british-citizen' ||
             req.sessionModel.get('application-type') === 'eu-settlement-scheme'))
        }
      ],
      next: '/main-applicant-passport'
    },
    '/visa-type': {  // logic required
      next: '/about-application'
    },
    '/further-leave': { // //logic required
      next: '/about-application'
    },
    '/cancelling-application': { // Should hold a logic before access to this page
      continueOnEdit: true,
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

    '/proof-of-identity': {},

    '/reference-number': {

      next: '/your-documents'
    },
    '/your-documents': {

      next: '/main-applicant'
    },
    '/main-applicant': {

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
      next: '/request-received'
    },
    '/request-received': {
      clearSession: true
    }
  }
};
