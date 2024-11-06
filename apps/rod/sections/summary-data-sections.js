'use strict';

const config = require('../../../config');
const dateFormater = new Intl.DateTimeFormat(config.dateLocales, config.dateFormat);

module.exports = {
  sectionHeader: [
    {
      step: '/who-completing',
      field: 'who-is-completing'
    },
    {
      step: '/who-representing',
      field: 'who-is-representing'
    },
    {
      step: '/sponsor-type',
      field: 'sponsor-type'
    },
    {
      step: '/about-application',
      field: 'date-of-application',
      parse: d => d && dateFormater.format(new Date(d))
    },
    {
      step: '/about-application',
      field: 'cancel-application'
    },
    {
      step: '/dependant-or-guardian',
      field: 'dependant-or-guardian'
    },
    {
      step: '/legal-representation',
      field: 'legal-rep-name'
    },
    {
      step: '/application',
      field: 'application-type'
    },
    {
      step: '/visa-type',
      field: 'visa-type'
    },
    {
      step: '/further-leave',
      field: 'further-leave-to-remain'
    },
    {
      step: '/about-application',
      field: 'cancel-application'
    },
    {
      step: '/main-applicant-passport',
      field: 'is-requesting-passport-to-travel'
    },
    {
      step: '/reuse-main-applicant-address',
      field: 'is-passport-return-address'
    },
    {
      step: '/main-applicant',
      field: 'main-applicant-full-name'
    },
    {
      step: '/main-applicant',
      field: 'main-applicant-dob',
      parse: d => d && dateFormater.format(new Date(d))
    },
    {
      step: '/main-applicant',
      field: 'main-applicant-nationality'
    },
    {
      step: '/your-documents',
      field: 'document-type',
      parse: (value, req) => {
        return  Array.isArray(value) ?
          value.map(option => option === 'Other' ? req.sessionModel.get('enter-document-type') : option).join(', ') :
          value;
      }
    },
    {
      step: '/your-documents',
      field: 'document-description'
    },
    {
      step: '/contact-details',
      field: 'contact-email'
    },
    {
      step: '/contact-details',
      field: 'contact-telephone'
    },
    {
      step: '/extra-notes',
      field: 'notes'
    },
    {
      step: '/reference-number',
      field: 'enter-reference-number'
    },
    {
      step: '/reference-number',
      field: 'enter-case-id'
    },
    {
      step: '/reference-number',
      field: 'enter-ho-reference-number'
    },
    {
      step: '/reference-number',
      field: 'enter-payment-reference-number'
    },
    {
      step: '/reference-number',
      field: 'enter-courier-reference-number'
    }
  ]
};
