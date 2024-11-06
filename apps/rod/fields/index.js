const dateComponent = require('hof').components.date;
const countries = require('hof').utils.countries();

const validators = require('hof/controller/validation/validators');

// TODO: Move this into behavior when the custom validation file is added as part
// of other ticket
function validInternationalPhoneNumber(value) {
  const phoneNumberWithoutSpace = value.replace(/\s+/g, '');
  const isValidPhoneNumber = validators.regex(
    phoneNumberWithoutSpace,
    /^\(?\+?[\d()-]{8,16}$/
  );
  return isValidPhoneNumber && validators.internationalPhoneNumber(value);
}

function extraNotes(value) {
  return validators.maxlength(value, 2000);
}

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
  'main-applicant-full-name': {
    validate: [
      'required',
      { type: 'minlength', arguments: [3] },
      { type: 'maxlength', arguments: [250] },
      'notUrl'
    ]
  },
  'main-applicant-dob': dateComponent('main-applicant-dob', {
    mixin: 'input-date',
    validate: [
      'required',
      'date',
      { type: 'before', arguments: ['0', 'days'] },
      { type: 'after', arguments: ['120', 'years'] }
    ]
  }),
  'main-applicant-nationality': {
    mixin: 'select',
    className: ['typeahead'],
    options: [
      {
        value: '',
        label: 'fields.main-applicant-nationality.options.none_selected'
      }
    ].concat(countries),
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
  'date-of-application': dateComponent('date-of-application', {
    mixin: 'input-date',
    validate: [
      'required',
      'date',
      { type: 'after', arguments: ['120', 'years'] },
      { type: 'before', arguments: ['0', 'days'] }
    ]
  }),
  'cancel-application': {
    mixin: 'radio-group',
    options: ['yes', 'no'],
    validate: 'required',
    dependent: {
      field: 'who-is-completing',
      value: 'sponsor'
    },
    className: 'govuk-radios--inline'
  },
  'further-leave-to-remain': {
    mixin: 'radio-group',
    options: ['flr-fp', 'flr-m', 'flr-ir', 'flr-hro'],
    validate: 'required',
    legend: {
      className: 'govuk-label--m'
    }
  },
  'document-type': {
    mixin: 'checkbox-group',
    legend: {
      className: 'govuk-label--s'
    },
    options: [
      {
        value: 'passport'
      },
      {
        value: 'driving-license'
      },
      {
        value: 'birth-certificate'
      },
      {
        value: 'marriage-certificate'
      },
      {
        value: 'other',
        toggle: 'enter-document-type',
        child: 'input-text'
      }
    ]
  },
  'enter-document-type': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: 1 },
      { type: 'maxlength', arguments: 100 }
    ],
    dependent: {
      field: 'document-type',
      value: 'other'
    },
    className: ['govuk-input', 'govuk-!-width-one-half']
  },
  'document-description': {
    mixin: 'textarea',
    validate: ['notUrl', { type: 'maxlength', arguments: 5000 }],
    attributes: [{ attribute: 'rows', value: 5 }],
    labelClassName: 'govuk-label--s'
  },
  'contact-email': {
    mixin: 'input-text',
    validate: [
      'required',
      { type: 'minlength', arguments: 6 },
      { type: 'maxlength', arguments: 256 },
      'email'
    ]
  },
  'contact-telephone': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'minlength', arguments: 8 },
      { type: 'maxlength', arguments: 16 },
      validInternationalPhoneNumber
    ]
  },
  notes: {
    mixin: 'textarea',
    validate: [extraNotes, 'notUrl'],
    attributes: [{ attribute: 'rows', value: 5 }]
  },
    'reference-number': {
      mixin: 'checkbox-group',
      labelClassName: 'govuk-label--s',
      isPageHeading: true,
      validate: ['required'],
      options: [
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
        }
      ]
    },
    'enter-case-id': {
      dependent: {
        field: 'reference-number',
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
        field: 'reference-number',
        value: 'ho-reference-number'
      },
      className: ['govuk-input', 'govuk-!-width-two-thirds'],
      validate: [
        'required',
        { type: 'minlength', arguments: 8 },
        'notUrl',
        { type: 'maxlength', arguments: 250 }
      ]
    },
    'enter-payment-reference-number': {
      dependent: {
        field: 'reference-number',
        value: 'payment-reference-number'
      },
      className: ['govuk-input', 'govuk-!-width-two-thirds'],
      validate: ['required', { type: 'maxlength', arguments: 100 }, 'notUrl']
    },
    'enter-courier-reference-number': {
      dependent: {
        field: 'reference-number',
        value: 'courier-reference-number'
      },
      className: ['govuk-input'],
      validate: ['required', { type: 'maxlength', arguments: 100 }, 'notUrl']
    }
};
