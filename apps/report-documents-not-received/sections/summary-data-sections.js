'use strict';

const config = require('../../../config');
const dateFormater = new Intl.DateTimeFormat(config.dateLocales, config.dateFormat);

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
      step: '/documents-not-received-contact-details',
      field: 'dnr-email'
    },
    {
      step: '/documents-not-received-contact-details',
      field: 'dnr-telephone'
    }
  ]
};
