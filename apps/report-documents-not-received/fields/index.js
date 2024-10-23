'use strict';

const countries = require('hof').utils.countries();
const dateComponent = require('hof').components.date;

const validators = require('hof/controller/validation/validators');

// May be move this logic to behaviour later

function removeWhiteSpace(value) {
  return value.replace(/\s+/g, '');
}

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

function validInternationalPhoneNumber(value) {
  const phoneNumberWithoutSpace = value.replace(/\s+/g, '').trim();
  const isValidPhoneNumber = validators.regex(
    phoneNumberWithoutSpace,
    /^\(?\+?[\d()-]{8,16}$/
  );
  return isValidPhoneNumber && validators.internationalPhoneNumber(value);
}

module.exports = {
  'dnr-application-type': {
    isPageHeading: true,
    mixin: 'radio-group',
    options: ['dnr-visa',
      'dnr-british-citizen',
      'dnr-further-leave',
      'dnr-not-time-limit',
      'dnr-eu-settlement-scheme',
      'dnr-settlement',
      'dnr-limited-leave-replacement-brp'],
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
    options: [{
      value: '',
      label: 'fields.dnr-nationality.options.none_selected'
    }].concat(countries),
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
      'dnr-visa-type-turkish',
      'dnr-visa-type-different'
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
      }
    ]
  },
  'dnr-record-number': {
    dependent: {
      field: 'dnr-reference-number',
      value: 'dnr-record-number'
    },
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    validate: [
      'required',
      'notUrl',
      { type: 'maxlength', arguments: 250 },
      { type: 'minlength', arguments: 9 },
      recordMaxLength,
      recordNum
    ],
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
    validate: [
      'required',
      'notUrl',
      { type: 'maxlength', arguments: 250 },
      { type: 'minlength', arguments: 8 },
      hoRefNum,
      hoRefMaxLength
    ]
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
