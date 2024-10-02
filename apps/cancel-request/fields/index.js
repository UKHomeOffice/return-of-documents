'use strict';
const dateComponent = require('hof').components.date;
const countries = require('hof').utils.countries();

module.exports = {
  name: {
    mixin: 'input-text'
  },
  'cnc-main-applicant-full-name': {
    mixin: 'input-text',
    validate: ['required', { type: 'maxlength', arguments: 250 }, { type: 'minlength', arguments: 3 }],
    legend: {
      className: 'bold'
    }
  },
  'cnc-main-applicant-dob': dateComponent('cnc-main-applicant-dob', {
    mixin: 'input-date',
    legend: {
      className: 'bold'
    },
    validate: ['required']
  }),
  'cnc-main-applicant-nationality': {
    mixin: 'select',
    validate: 'required',
    legend: {
      className: 'bold'
    },
    options: [{
      value: '',
      label: 'fields.cnc-main-applicant-nationality.options.none_selected'
    }].concat(countries),
    labelClassName: 'bold'
  },
  'cnc-who-is-completing': {
    mixin: 'radio-group',
    options: ['applicant', 'legal-rep', 'sponsor', 'guardian'],
    validate: 'required',
    legend: {
      className: 'bold'
    }
  },
  'cnc-who-is-representing': {
    mixin: 'radio-group',
    options: ['applicant', 'document-holder'],
    validate: 'required',
    legend: {
      className: 'bold'
    }
  },
  'cnc-sponsor-type': {
    mixin: 'radio-group',
    options: ['british-sponsor', 'settle-sponsor', 'eea-sponsor'],
    validate: 'required',
    legend: {
      className: 'bold'
    }
  },
  'cnc-dependant-or-guardian': {
    mixin: 'radio-group',
    options: ['british-sponsor', 'settle-sponsor', 'eea-sponsor'],
    validate: 'required',
    legend: {
      className: 'bold'
    }
  },
  'cnc-reason-for-application': {
    mixin: 'radio-group',
    options: ['visa', 'british-citizenship', 'leave-to-remain',
      'ntl-or-brp', 'european-settlement-scheme', 'settlement', 'toc-or-brp'],

    validate: 'required',
    legend: {
      className: 'bold'
    }
  },
  'cnc-visa-type': {
    mixin: 'radio-group',
    options: ['british-overseas-national', 'exceptional-talent',
      'skilled-worker', 'study', 'temporary-work', 'turkish-national', 'different-type'],

    validate: 'required',
    legend: {
      className: 'bold'
    }
  },
  'cnc-further-leave': {
    mixin: 'radio-group',
    options: ['fp', 'm', 'ir', 'hro'],
    validate: 'required',
    legend: {
      className: 'bold'
    }
  },
  'cnc-reference-number': {
    mixin: 'radio-group',
    options: ['record-number', 'case-id', 'ho-ref-number', 'payment-ref-number', 'courier-ref-number'],
    validate: 'required',
    legend: {
      className: 'bold'
    }
  },
  'cnc-contact-email': {
    mixin: 'input-text',
    validate: 'required',
    legend: {
      className: 'bold'
    }
  },
  'cnc-contact-telephone-number': {
    mixin: 'input-text',
    validate: 'required',
    legend: {
      className: 'bold'
    }
  },
  "cnc-visa-type": {
    mixin: "radio-group",
    isPageHeading: true,
    options: [
      "british-national",
      "exceptional-talent",
      "skilled-worker",
      "study",
      "temporary-worker",
      "turkish-national",
      "different-type"
    ],
    validate: "required"
  }

};
