'use strict';

const countries = require('hof').utils.countries();
const dateComponent = require('hof').components.date;

module.exports = {
  'dnr-application-type': {
    mixin: 'radio-group',
    options: ['dnr-visa',
      'dnr-british-citizen',
      'dnr-further-leave',
      'dnr-not-time-limit',
      'dnr-eu-settlement-scheme',
      'dnr-settlement',
      'dnr-limited-leave-replacement-brp'],
    validate: 'required',
    legend: {
      className: 'bold'
    }
  },
  'dnr-full-name': {
    validate: [
      'required',
      { type: 'minlength', arguments: [3] },
      { type: 'maxlength', arguments: [250] },
      'notUrl'
    ]
  },
  'dnr-dob': dateComponent('dnr-dob', {
    mixin: 'input-date',
    validate: [
      'required',
      'date',
      { type: 'before', arguments: ['0', 'days'] },
      { type: 'after', arguments: ['120', 'years'] }
    ]
  }),
  'dnr-nationality': {
    mixin: 'select',
    className: ['typeahead'],
    options: [{
      value: '',
      label: 'fields.dnr-nationality.options.null'
    }].concat(countries),
    validate: 'required'
  }
};
