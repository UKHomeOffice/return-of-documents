const SummaryPageBehaviour = require('hof').components.summary;
const enableRelatedServicesMenu = require('./behaviours/related-services-menu');

module.exports = {
  name: 'rod',
  steps: {
    '/start': {
      behaviours: [enableRelatedServicesMenu]
    },
    '/who-completing': {
      fields: ['who-is-completing'],
      continueOnEdit: true,
      backLink: 'start',
      forks: [
        {
          target: '/who-representing',
          condition: {
            field: 'who-is-completing',
            value: 'who-is-rep'
          }
        },
        {
          target: '/sponsor-type',
          condition: {
            field: 'who-is-completing',
            value: 'sponsor'
          }
        },
        {
          target: '/dependant-or-guardian',
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
      continueOnEdit: true,
      next: '/legal-representation'
    },
    '/legal-representation': {
      fields: ['confirm-sent-letter-of-authority', 'legal-rep-name'],
      continueOnEdit: true,
      next: '/application'
    },
    '/sponsor-type': {
      fields: ['sponsor-type'],
      continueOnEdit: true,
      next: '/application'
    },
    '/dependant-or-guardian': {
      fields: ['dependant-or-guardian'],
      continueOnEdit: true,
      next: '/application'
    },
    '/application': {
      fields: ['application-type'],
      continueOnEdit: true,
      forks: [
        {
          target: '/visa-type',
          condition: {
            field: 'application-type',
            value: 'visa'
          }
        },
        {
          target: '/further-leave',
          condition: {
            field: 'application-type',
            value: 'further-leave'
          }
        }
      ],
      next: '/about-application'
    },
    '/visa-type': {
      fields: ['visa-type'],
      continueOnEdit: true,
      next: '/about-application'
    },
    '/further-leave': {
      fields: ['further-leave-to-remain'],
      continueOnEdit: true,
      next: '/about-application'
    },
    '/about-application': {
      fields: ['cancel-application'],
      continueOnEdit: true,
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
    '/cancelling-application': {
      continueOnEdit: true,
      next: '/reference-number'
    },
    '/main-applicant-passport': {
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
      fields: ['document-type',
        'enter-document-type',
        'document-description'
      ],
      next: '/main-applicant'
    },
    '/main-applicant': {
      fields: ['main-applicant-full-name', 'main-applicant-dob', 'main-applicant-nationality'],
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
