'use strict';

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
  'dependant-or-guardian': {
    mixin: 'radio-group',
    isPageHeading: true,
    options: ['dependant-over-18', 'parent-guardian-under-18'],
    validate: 'required'
  },
  'confirm-sent-letter-of-authority': {
    mixin: 'checkbox',
    validate: ['required']
  },
  'legal-rep-name': {
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 150 }]
  },
  'cancel-application': {
    mixin: 'radio-group',
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
  'visa-type': {
    mixin: 'radio-group',
    isPageHeading: true,
    options: [
      'visa-type-british',
      'visa-type-talent',
      'visa-type-skilled',
      'visa-type-study',
      'visa-type-temp',
      'visa-type-turkish',
      'visa-type-different'
    ],
    validate: 'required'
  },
  'further-leave-to-remain': {
    mixin: 'radio-group',
    options: ['flr-fp', 'flr-m', 'flr-ir', 'flr-hro'],
    validate: 'required',
    legend: {
      className: 'govuk-label--m'
    }
  }
};
