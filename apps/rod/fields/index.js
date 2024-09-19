'use strict';

module.exports = {
  name: {
    mixin: 'input-text'
  },
  'who-is-completing': {
    mixin: 'radio-group',
    options: ['applicant', 'who-is-rep', 'sponsor', 'guardian'],
    validate: 'required',
    legend: {
      className: 'bold'
    }
  },
  'is-cancel-application': {
    mixin: 'radio-group',
    options: ['yes', 'no'],
    validate: 'required'
  },
  'is-passport-return-address':{
    mixin: 'radio-group',
    options: ['yes', 'no'],
    validate: 'required'
  },
  'is-requesting-passport-to-travel': {
    mixin: 'radio-group',
    options: ['yes', 'no'],
    validate: 'required'
  },
  'application-type': {
    mixin: 'radio-group',
    options: ['visa', 'british-citizen', 'further-leave', 'not-time-limit','eu-settlement-scheme', 'settlement', 'limited-leave-replacement-brp'],
    validate: 'required',
    legend: {
      className: 'bold'
    }
  }

};
