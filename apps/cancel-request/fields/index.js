'use strict';
const dateComponent = require('hof').components.date;
const countries = require('hof').utils.countries();
const validators = require('hof/controller/validation/validators');

function validInternationalPhoneNumber(value) {
  const phoneNumberWithoutSpace = value.replace(/\s+/g, '').trim();
  const isValidPhoneNumber = validators.regex(
    phoneNumberWithoutSpace,
    /^\(?\+?[\d()-]{8,16}$/
  );
  return isValidPhoneNumber && validators.internationalPhoneNumber(value);
}

module.exports = {
  name: {
    mixin: 'input-text'
  },
  'cnc-main-applicant-full-name': {
    mixin: 'input-text',
    validate: [
      'required',
      { type: 'maxlength', arguments: 250 },
      { type: 'minlength', arguments: 3 },
      'notUrl'
    ]
  },
  'cnc-main-applicant-dob': dateComponent('cnc-main-applicant-dob', {
    mixin: 'input-date',
    validate: [
      'required',
      'date',
      { type: 'after', arguments: ['120', 'years'] },
      { type: 'before', arguments: ['0', 'days'] }
    ]
  }),
  'cnc-main-applicant-nationality': {
    mixin: 'select',
    validate: 'required',
    options: [
      {
        value: '',
        label: 'fields.cnc-main-applicant-nationality.options.none_selected'
      }
    ].concat(countries),
    className: 'typeahead'
  },
  'cnc-who-is-completing': {
    mixin: 'radio-group',
    isPageHeading: true,
    options: ['applicant', 'legal-rep', 'sponsor', 'guardian'],
    validate: 'required'
  },
  'cnc-who-is-representing': {
    mixin: 'radio-group',
    isPageHeading: true,
    options: ['applicant', 'document-holder'],
    validate: 'required'
  },
  'cnc-sponsor-type': {
    mixin: 'radio-group',
    isPageHeading: true,
    options: ['british-sponsor', 'settle-sponsor', 'eea-sponsor'],
    validate: 'required'
  },
  'cnc-dependant-or-guardian': {
    mixin: 'radio-group',
    isPageHeading: true,
    options: ['dependant-over-18', 'parent-guardian-under-18'],
    validate: 'required'
  },
  'cnc-reason-for-application': {
    mixin: 'radio-group',
    options: [
      'visa',
      'british-citizenship',
      'leave-to-remain',
      'ntl-or-brp',
      'european-settlement-scheme',
      'settlement',
      'toc-or-brp'
    ],
    validate: 'required'
  },
  'cnc-visa-type': {
    mixin: 'radio-group',
    options: [
      'british-overseas-national',
      'exceptional-talent',
      'skilled-worker',
      'study',
      'temporary-work',
      'turkish-national',
      'different-type'
    ],

    validate: 'required'
  },
  'cnc-further-leave': {
    mixin: 'radio-group',
    options: ['fp', 'm', 'ir', 'hro'],
    validate: 'required'
  },
  'cnc-reference-number': {
    mixin: 'radio-group',
    options: [
      'record-number',
      'case-id',
      'ho-ref-number',
      'payment-ref-number',
      'courier-ref-number'
    ],
    validate: 'required'
  },
  'cnc-contact-email': {
    mixin: 'input-text',
    validate: 'required'
  },
  'cnc-contact-telephone-number': {
    mixin: 'input-text',
    validate: 'required'
  },
  'cnc-application-visa-type': {
    mixin: 'radio-group',
    isPageHeading: true,
    options: [
      'british-national',
      'exceptional-talent',
      'skilled-worker',
      'study',
      'temporary-worker',
      'turkish-national',
      'different-type'
    ],
    validate: 'required'
  },
  'cnc-further-leave-to-remain': {
    mixin: 'radio-group',
    options: ['flr-fp', 'flr-m', 'flr-ir', 'flr-hro'],
    validate: 'required',
    legend: {
      className: 'govuk-label--m'
    }
  },
  'cnc-email': {
    mixin: 'input-text',
    validate: [
      'required',
      { type: 'minlength', arguments: 6 },
      { type: 'maxlength', arguments: 256 },
      'email'
    ]
  },
  'cnc-telephone': {
    mixin: 'input-text',
    validate: [
      'required',
      { type: 'minlength', arguments: 8 },
      { type: 'maxlength', arguments: 16 },
      validInternationalPhoneNumber
    ],
    className: ['govuk-input', 'govuk-!-width-one-half']
  }
};
