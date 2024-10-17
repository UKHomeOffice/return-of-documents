'use strict';

const dateComponent = require('hof').components.date;

module.exports = {
  name: {
    mixin: 'input-text'
  },
  'who-is-completing': {
    mixin: 'radio-group',
    isPageHeading: true,
    options: ['applicant', 'who-is-rep', 'sponsor', 'guardian'],
    validate: 'required'
  },
  'who-is-representing': {
    mixin: 'radio-group',
    isPageHeading: true,
    options: ['main-applicant', 'document-holder'],
    validate: 'required'
  },
  'sponsor-type': {
    mixin: 'radio-group',
    isPageHeading: true,
    options: ['british-sponsor', 'settled-sponsor', 'eea-sponsor'],
    validate: 'required'
  },
  'is-cancel-application': {
    mixin: 'radio-group',
    isPageHeading: true,
    options: ['yes', 'no'],
    validate: 'required'
  },
  'is-passport-return-address': {
    mixin: 'radio-group',
    isPageHeading: true,
    options: ['yes', 'no'],
    validate: 'required'
  },
  'is-requesting-passport-to-travel': {
    mixin: 'radio-group',
    isPageHeading: true,
    options: ['yes', 'no'],
    validate: 'required'
  },
  'application-type': {
    mixin: 'radio-group',
    isPageHeading: true,
    options: [
      'visa',
      'british-citizen',
      'further-leave',
      'not-time-limit',
      'eu-settlement-scheme',
      'settlement',
      'limited-leave-replacement-brp'
    ],
    validate: 'required'
  },
  'date-of-application': dateComponent('date-of-application', {
    mixin: 'input-date',
    isPageHeading: true,
    options: ['yes', 'no'],
    validate: ['required', 'date',
      { type: 'after', arguments: ['120', 'years'] },
      { type: 'before', arguments: ['0', 'days'] }
    ]
  }),
'cancel-application': {
   mixin: 'radio-group',
   validate: 'required',
    options: [
      {
        value: 'yes'
      },
      {
        value: 'no'
      }
    ]
}
};
