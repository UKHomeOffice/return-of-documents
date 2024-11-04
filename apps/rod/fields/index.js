const dateComponent = require('hof').components.date;
const countries = require('hof').utils.countries();
const validators = require('hof/controller/validation/validators');

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
  'cancel-application': {
    mixin: 'radio-group',
    validate: 'required',
    options: ['yes', 'no'],
    className: 'govuk-radios--inline'
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
    options: [{
      value: '',
      label: 'fields.main-applicant-nationality.options.none_selected'
    }].concat(countries),
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
      {type: 'minlength', arguments: 1},
      { type: 'maxlength', arguments: 100}
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
  notes: {
    mixin: 'textarea',
    validate: [extraNotes, 'notUrl'],
    attributes: [{ attribute: 'rows', value: 5 }]
  }
};
