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

function postCode(value) {
  return value.match(/^[a-zA-Z0-9\s]*$/);
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
  'declaration-check': {
    mixin: 'checkbox',
    validate: ['required']
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
  'delivery-address-line-1': {
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 250 }]
  },
  'delivery-address-line-2': {
    validate: ['notUrl', { type: 'maxlength', arguments: 250 }]
  },
  'delivery-address-town-or-city': {
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 250 }]
  },
  'delivery-address-postcode': {
    validate: ['required', 'notUrl', postCode, 'postcode'],
    formatter: ['ukPostcode'],
    className: ['govuk-input', 'govuk-input--width-10']
  },
  notes: {
    mixin: 'textarea',
    validate: [extraNotes, 'notUrl'],
    attributes: [{ attribute: 'rows', value: 5 }]
  },
  'main-applicant-address-1': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'maxlength', arguments: 250 }
    ]
  },
  'main-applicant-address-2': {
    mixin: 'input-text',
    validate: [
      'notUrl',
      { type: 'maxlength', arguments: 250 }
    ]
  },
  'main-applicant-town-or-city': {
    mixin: 'input-text',
    validate: [
      'required',
      'notUrl',
      { type: 'maxlength', arguments: 250 }
    ]
  },
  'main-applicant-postcode': {
    mixin: 'input-text',
    validate: ['required', 'notUrl', postCode, 'postcode'],
    formatter: ['ukPostcode'],
    className: ['govuk-input--width-10', 'govuk-input']
  }
};
