'use strict';
const dateComponent = require('hof').components.date;
const countries = require('hof').utils.countries();

module.exports = {
  name: {
    mixin: 'input-text'
  },
  'cnc-main-applicant-full-name': {
    mixin: 'input-text',
    validate: ['required', { type: 'maxlength', arguments: 250 }, { type: 'minlength', arguments: 3 }, 'notUrl']
  },
  'cnc-main-applicant-dob': dateComponent('cnc-main-applicant-dob', {
    mixin: 'input-date',
    validate: ['required', 'date',
      { type: 'after', arguments: ['120', 'years'] },
      { type: 'before', arguments: ['0', 'days']}]
  }),
  'cnc-main-applicant-nationality': {
    mixin: 'select',
    validate: 'required',
    options: [{
      value: '',
      label: 'fields.cnc-main-applicant-nationality.options.none_selected'
    }].concat(countries),
    className: 'typeahead'
  },
  'cnc-who-is-completing': {
    mixin: 'radio-group',
    options: ['applicant', 'legal-rep', 'sponsor', 'guardian'],
    validate: 'required'
  },
  'cnc-who-is-representing': {
    mixin: 'radio-group',
    options: ['applicant', 'document-holder'],
    validate: 'required'
  },
  'cnc-sponsor-type': {
    mixin: 'radio-group',
    options: ['british-sponsor', 'settle-sponsor', 'eea-sponsor'],
    validate: 'required'
  },
  'cnc-dependant-or-guardian': {
    mixin: 'radio-group',
    options: ['british-sponsor', 'settle-sponsor', 'eea-sponsor'],
    validate: 'required'
  },
  'cnc-reason-for-application': {
    mixin: 'radio-group',
    options: ['visa', 'british-citizenship', 'leave-to-remain',
      'ntl-or-brp', 'european-settlement-scheme', 'settlement', 'toc-or-brp'],
    validate: 'required'
  },
  'cnc-visa-type': {
    mixin: 'radio-group',
    options: ['british-overseas-national', 'exceptional-talent',
      'skilled-worker', 'study', 'temporary-work', 'turkish-national', 'different-type'],

    validate: 'required'
  },
  'cnc-further-leave': {
    mixin: 'radio-group',
    options: ['fp', 'm', 'ir', 'hro'],
    validate: 'required'
  },
  'cnc-reference-number': {
    mixin: 'radio-group',
    options: ['record-number', 'case-id', 'ho-ref-number', 'payment-ref-number', 'courier-ref-number'],
    validate: 'required'
  },
  'cnc-contact-email': {
    mixin: 'input-text',
    validate: 'required'
  },
  'cnc-contact-telephone-number': {
    mixin: 'input-text',
    validate: 'required'
  }

};
