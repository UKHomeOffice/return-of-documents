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
