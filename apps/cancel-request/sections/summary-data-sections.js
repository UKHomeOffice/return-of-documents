'use strict';

const config = require('../../../config');
const { removeWhiteSpace } = require('../../../utils');

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
      step: '/cancel-request-dependant-or-guardian',
      field: 'cnc-dependant-or-guardian'
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
      step: '/cancel-request-visa-type',
      field: 'cnc-application-visa-type'
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
      field: 'enter-record-number',
      parse: (value, req) => {
        if (!value) return null;
        const valueWithoutSpace = removeWhiteSpace(value);
        const containsRod = valueWithoutSpace.match(/^r[o0]d/i);
        if (containsRod) {
          return 'ROD' + valueWithoutSpace.slice(3);
        }
        return 'ROD' + valueWithoutSpace;
      }
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
