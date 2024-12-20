'use strict';
const dateComponent = require('hof').components.date;
const countries = require('hof').utils.countries();
const validators = require('hof/controller/validation/validators');
const {
  removeWhiteSpace,
  validInternationalPhoneNumber,
  isValidUANRef
} = require('../../../utils');

function recordMaxLength(value) {
  return validators.maxlength(removeWhiteSpace(value), 12);
}

function recordNum(value) {
  return removeWhiteSpace(value).match(/^(R[O0]D\d{9}|\d{9})$/i);
}

function hoRefMaxLength(value) {
  return validators.maxlength(removeWhiteSpace(value), 8);
}

function hoRefNum(value) {
  return removeWhiteSpace(value).match(/^[A-Z]\d{7}$/i);
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
    isPageHeading: true,
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
  'cnc-reference-number': {
    mixin: 'radio-group',
    labelClassName: 'govuk-label--s',
    isPageHeading: true,
    validate: ['required'],
    options: [
      {
        value: 'record-number',
        toggle: 'enter-record-number',
        child: 'input-text'
      },
      {
        value: 'case-id',
        toggle: 'enter-case-id',
        child: 'input-text'
      },
      {
        value: 'ho-reference-number',
        toggle: 'enter-ho-reference-number',
        child: 'input-text'
      },
      {
        value: 'payment-reference-number',
        toggle: 'enter-payment-reference-number',
        child: 'input-text'
      },
      {
        value: 'courier-reference-number',
        toggle: 'enter-courier-reference-number',
        child: 'input-text'
      },
      {
        value: 'unique-application-number',
        toggle: 'enter-unique-application-number',
        child: 'input-text'
      }
    ]
  },
  'enter-record-number': {
    dependent: {
      field: 'cnc-reference-number',
      value: 'record-number'
    },
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    validate: [
      'required',
      { type: 'minlength', arguments: 9 },
      'notUrl',
      recordMaxLength,
      recordNum,
      { type: 'maxlength', arguments: 250 }
    ],
    attributes: [{ prefix: 'ROD' }]
  },
  'enter-case-id': {
    dependent: {
      field: 'cnc-reference-number',
      value: 'case-id'
    },
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    validate: [
      'required',
      { type: 'maxlength', arguments: 8 },
      { type: 'minlength', arguments: 8 },
      'numeric',
      'notUrl'
    ]
  },
  'enter-ho-reference-number': {
    dependent: {
      field: 'cnc-reference-number',
      value: 'ho-reference-number'
    },
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    validate: [
      'required',
      { type: 'minlength', arguments: 8 },
      'notUrl',
      hoRefMaxLength,
      hoRefNum,
      { type: 'maxlength', arguments: 250 }
    ]
  },
  'enter-payment-reference-number': {
    dependent: {
      field: 'cnc-reference-number',
      value: 'payment-reference-number'
    },
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    validate: ['required', { type: 'maxlength', arguments: 100 }, 'notUrl']
  },
  'enter-courier-reference-number': {
    dependent: {
      field: 'cnc-reference-number',
      value: 'courier-reference-number'
    },
    className: ['govuk-input'],
    validate: ['required', { type: 'maxlength', arguments: 100 }, 'notUrl']
  },
  'enter-unique-application-number': {
    dependent: {
      field: 'cnc-reference-number',
      value: 'unique-application-number'
    },
    className: ['govuk-input'],
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: 16 },
      { type: 'maxlength', arguments: 22 },
      { type: 'regex', arguments: /^(([\d\-\/]+)?)$/ },
      isValidUANRef
    ]
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
      'turkish-national'
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
      'notUrl',
      { type: 'minlength', arguments: 8 },
      { type: 'maxlength', arguments: 16 },
      validInternationalPhoneNumber
    ],
    className: ['govuk-input', 'govuk-!-width-one-half']
  }
};
