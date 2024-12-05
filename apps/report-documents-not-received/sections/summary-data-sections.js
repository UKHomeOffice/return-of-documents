'use strict';

const config = require('../../../config');
const dateFormater = new Intl.DateTimeFormat(config.dateLocales, config.dateFormat);
const { removeWhiteSpace } = require('../../../utils');

module.exports = {
  sectionHeader: [
    {
      step: '/documents-not-received-main-applicant',
      field: 'dnr-full-name'
    },
    {
      step: '/documents-not-received-main-applicant',
      field: 'dnr-dob',
      parse: d => d && dateFormater.format(new Date(d))
    },
    {
      step: '/documents-not-received-main-applicant',
      field: 'dnr-nationality'
    },
    {
      step: '/documents-not-received-application',
      field: 'dnr-application-type'
    },
    {
      step: '/documents-not-received-visa-type',
      field: 'dnr-visa-type'
    },
    {
      step: '/documents-not-received-further-leave',
      field: 'dnr-further-leave-to-remain'
    },
    {
      step: '/documents-not-received-reference-number',
      field: 'dnr-reference-number'
    },
    {
      step: '/documents-not-received-reference-number',
      field: 'dnr-record-number',
      parse: value => {
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
      step: '/documents-not-received-reference-number',
      field: 'dnr-case-id'
    },
    {
      step: '/documents-not-received-reference-number',
      field: 'dnr-ho-reference-number'
    },
    {
      step: '/documents-not-received-reference-number',
      field: 'dnr-payment-reference-number'
    },
    {
      step: '/documents-not-received-reference-number',
      field: 'dnr-courier-reference-number'
    },
    {
      step: '/documents-not-received-reference-number',
      field: 'dnr-unique-application-number'
    },
    {
      step: '/documents-not-received-contact-details',
      field: 'dnr-email'
    },
    {
      step: '/documents-not-received-contact-details',
      field: 'dnr-telephone'
    }
  ]
};
