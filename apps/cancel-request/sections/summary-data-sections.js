'use strict';

const config = require('../../../config');
const dateFormater = new Intl.DateTimeFormat(
  config.dateLocales,
  config.dateFormat
);

module.exports = {
  sectionHeader: [
    {
      step: '/cancel-request-main-applicant',
      field: 'cnc-main-applicant-full-name'
    },
    {
      step: '/cancel-request-main-applicant',
      field: 'cnc-main-applicant-dob',
      parse: d => d && dateFormater.format(new Date(d))
    },
    {
      step: '/cancel-request-main-applicant',
      field: 'cnc-main-applicant-nationality'
    },
    {
      step: '/cancel-request-who-completed-form',
      field: 'cnc-who-is-completing'
    },
    {
      step: '/cancel-request-sponsor-type',
      field: 'cnc-sponsor-type'
    },
    {
      step: '/cancel-request-application',
      field: 'cnc-reason-for-application'
    },
    {
      step: '/cancel-request-further-leave',
      field: 'cnc-further-leave-to-remain'
    },
    {
      step: '/cancel-request-reference-number',
      field: 'cnc-reference-number'
    },
    {
      step: '/cancel-request-reference-number',
      field: 'enter-record-number'
    },
    {
      step: '/cancel-request-reference-number',
      field: 'enter-case-id'
    },
    {
      step: '/cancel-request-reference-number',
      field: 'enter-ho-reference-number'
    },
    {
      step: '/cancel-request-reference-number',
      field: 'enter-payment-reference-number'
    },
    {
      step: '/cancel-request-reference-number',
      field: 'enter-courier-reference-number'
    },
    {
      step: '/cancel-request-contact-details',
      field: 'cnc-email'
    },
    {
      step: '/cancel-request-contact-details',
      field: 'cnc-telephone'
    }
  ]
};
