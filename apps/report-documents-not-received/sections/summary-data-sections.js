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
    }
  ]
};
