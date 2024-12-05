'use strict';

const countries = require('hof').utils.countries();
const dateComponent = require('hof').components.date;
const {
  validInternationalPhoneNumber,
  isValidUANRef
} = require('../../../utils');

module.exports = {
  'dnr-application-type': {
    isPageHeading: true,
    mixin: 'radio-group',
    options: [
      'dnr-visa',
      'dnr-british-citizen',
      'dnr-further-leave',
      'dnr-not-time-limit',
      'dnr-eu-settlement-scheme',
      'dnr-settlement',
      'dnr-limited-leave-replacement-brp'
    ],
    validate: 'required'
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
    options: [
      {
        value: '',
        label: 'fields.dnr-nationality.options.none_selected'
      }
    ].concat(countries),
    validate: 'required'
  },
  'dnr-further-leave-to-remain': {
    mixin: 'radio-group',
    options: ['flr-fp', 'flr-m', 'flr-ir', 'flr-hro'],
    validate: 'required',
    legend: {
      className: 'govuk-label--m'
    }
  },
  'dnr-visa-type': {
    mixin: 'radio-group',
    isPageHeading: true,
    options: [
      'dnr-visa-type-british',
      'dnr-visa-type-talent',
      'dnr-visa-type-skilled',
      'dnr-visa-type-study',
      'dnr-visa-type-temp',
      'dnr-visa-type-turkish'
    ],
    validate: 'required'
  },
  'dnr-reference-number': {
    mixin: 'radio-group',
    labelClassName: 'govuk-label--s',
    isPageHeading: true,
    validate: ['required'],
    options: [
      {
        value: 'dnr-record-number',
        toggle: 'dnr-record-number',
        child: 'input-text'
      },
      {
        value: 'dnr-case-id',
        toggle: 'dnr-case-id',
        child: 'input-text'
      },
      {
        value: 'dnr-ho-reference-number',
        toggle: 'dnr-ho-reference-number',
        child: 'input-text'
      },
      {
        value: 'dnr-payment-reference-number',
        toggle: 'dnr-payment-reference-number',
        child: 'input-text'
      },
      {
        value: 'dnr-courier-reference-number',
        toggle: 'dnr-courier-reference-number',
        child: 'input-text'
      },
      {
        value: 'dnr-unique-application-number',
        toggle: 'dnr-unique-application-number',
        child: 'input-text'
      }
    ]
  },
  'dnr-record-number': {
    dependent: {
      field: 'dnr-reference-number',
      value: 'dnr-record-number'
    },
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: [250] }],
    attributes: [{ prefix: 'ROD' }]
  },
  'dnr-case-id': {
    dependent: {
      field: 'dnr-reference-number',
      value: 'dnr-case-id'
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
  'dnr-ho-reference-number': {
    dependent: {
      field: 'dnr-reference-number',
      value: 'dnr-ho-reference-number'
    },
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: [250] }]
  },
  'dnr-payment-reference-number': {
    dependent: {
      field: 'dnr-reference-number',
      value: 'dnr-payment-reference-number'
    },
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    validate: ['required', { type: 'maxlength', arguments: 100 }, 'notUrl']
  },
  'dnr-courier-reference-number': {
    dependent: {
      field: 'dnr-reference-number',
      value: 'dnr-courier-reference-number'
    },
    className: ['govuk-input'],
    validate: ['required', { type: 'maxlength', arguments: 100 }, 'notUrl']
  },
  'dnr-unique-application-number': {
    dependent: {
      field: 'dnr-reference-number',
      value: 'dnr-unique-application-number'
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
  'dnr-email': {
    mixin: 'input-text',
    validate: [
      'required',
      { type: 'minlength', arguments: 6 },
      { type: 'maxlength', arguments: 256 },
      'email'
    ]
  },
  'dnr-telephone': {
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
