const SummaryPageBehaviour = require('hof').components.summary;
const enableRelatedServicesMenu = require('./behaviours/related-services-menu');
const whoIsCompleting = require('./behaviours/who-is-completing');
const sponsorSelectionHandler = require('./behaviours/sponsor-selection-handler');
const customValidation = require('./behaviours/custom-validation');
const makePayment = require('./behaviours/make-payment');
const paymentCompleted = require('./behaviours/payment-completed');

module.exports = {
  name: 'rod',
  steps: {
    '/start': {
      behaviours: [enableRelatedServicesMenu]
    },
    '/make-payment': {
      behaviours: [makePayment],
      next: '/who-completing'
    },
    '/payment-completed': {
      behaviours: [paymentCompleted],
      next: '/declaration'
    },
    '/who-completing': {
      behaviours: [whoIsCompleting, sponsorSelectionHandler],
      fields: ['who-is-completing'],
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
          continueOnEdit: true,
          condition: {
            field: 'application-type',
            value: 'visa'
          }
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
    '/visa-type': {
      fields: ['visa-type'],
      next: '/about-application'
    },
    '/further-leave': {
      fields: ['further-leave-to-remain'],
      next: '/about-application'
    },
    '/about-application': {
      behaviours: [customValidation],
      fields: ['date-of-application', 'cancel-application'],
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
          condition: req =>
            req.sessionModel.get('who-is-completing') === 'sponsor' ||
            (req.sessionModel.get('cancel-application') === 'no' &&
              (req.sessionModel.get('application-type') === 'british-citizen' ||
                req.sessionModel.get('application-type') ===
                  'eu-settlement-scheme'))
        }
      ],
      next: '/main-applicant-passport'
    },
    '/cancelling-application': {
      next: '/reference-number'
    },
    '/main-applicant-passport': {
      forks: [
        {
          target: '/proof-of-identity',
          condition: {
            field: 'is-requesting-passport-to-travel',
            value: 'yes'
          }
        },
        {
          target: '/cannot-travel',
          condition: {
            field: 'is-requesting-passport-to-travel',
            value: 'no'
          }
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
      fields: ['document-type', 'enter-document-type', 'document-description'],
      next: '/main-applicant'
    },
    '/main-applicant': {
      fields: [
        'main-applicant-full-name',
        'main-applicant-dob',
        'main-applicant-nationality'
      ],
      next: '/enter-main-applicant-address'
    },
    '/enter-main-applicant-address': {
      continueOnEdit: true,
      fields: [
        'main-applicant-address-1',
        'main-applicant-address-2',
        'main-applicant-town-or-city',
        'main-applicant-postcode'
      ],
      next: '/reuse-main-applicant-address'
    },
    '/reuse-main-applicant-address': {
      forks: [
        {
          target: '/contact-details',
          condition: {
            field: 'is-passport-return-address',
            value: 'yes'
          }
        },
        {
          target: '/enter-delivery-address',
          condition: {
            field: 'is-passport-return-address',
            value: 'no'
          }
        }
      ],
      fields: ['is-passport-return-address'],
      next: '/contact-details'
    },
    '/select-delivery-address': {
      next: '/contact-details'
    },
    '/enter-delivery-address': {
      fields: [
        'delivery-address-line-1',
        'delivery-address-line-2',
        'delivery-address-town-or-city',
        'delivery-address-postcode'
      ],
      next: '/contact-details'
    },
    '/contact-details': {
      fields: ['contact-email', 'contact-telephone'],
      next: '/extra-notes'
    },
    '/extra-notes': {
      fields: ['notes'],
      next: '/confirm'
    },
    '/confirm': {
      behaviours: [SummaryPageBehaviour],
      sections: require('./sections/summary-data-sections'),
      next: '/declaration'
    },
    '/declaration': {
      fields: ['declaration-check'],
      next: '/request-received'
    },
    '/request-received': {
      clearSession: true
    }
  }
};
