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
      step: '/cancel-request-who-representing',
      field: 'cnc-who-is-representing'
    },
    {
      step: '/cancel-request-visa-type',
      field: 'cnc-application-visa-type'
    },
    {
      step: '/cancel-request-further-leave',
      field: 'cnc-further-leave-to-remain'
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
