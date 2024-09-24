'use strict';

module.exports = {
  name: {
    mixin: 'input-text'
  },
  'main-applicant-full-name': {
    mixin: 'input-text',
    validate: 'required',
    legend: {
      className: 'bold'
    }
  },
  'main-applicant-dob': {
    mixin: 'input-text',
    validate: 'required',
    legend: {
      className: 'bold'
    }
  },
  'main-applicant-nationality': {
    mixin: 'select',
    validate: 'required',
    legend: {
      className: 'bold'
    }
  },
  'who-is-completing': {
    mixin: 'radio-group',
    options: ['applicant', 'who-is-rep', 'sponsor', 'guardian'],
    validate: 'required',
    legend: {
      className: 'bold'
    }
  },
  'who-is-representing': {
    mixin: 'radio-group',
    options: ['applicant', 'document-holder'],
    validate: 'required',
    legend: {
      className: 'bold'
    }
  },
  'sponsor-type': {
    mixin: 'radio-group',
    options: ['british-sponsor', 'settle-sponsor', 'eea-sponsor'],
    validate: 'required',
    legend: {
      className: 'bold'
    }
  },
  'dependant-or-guardian': {
    mixin: 'radio-group',
    options: ['british-sponsor', 'settle-sponsor', 'eea-sponsor'],
    validate: 'required',
    legend: {
      className: 'bold'
    }
  },
  'reason-for-application': {
    mixin: 'radio-group',
    options: ['visa', 'british-citizenship', 'leave-to-remain',
  'ntl-or-brp', 'european-settlement-scheme', 'settlement', 'toc-or-brp'],

    validate: 'required',
    legend: {
      className: 'bold'
    }
  },
  'visa-type': {
    mixin: 'radio-group',
    options: ['british-overseas-national', 'exceptional-talent',
  'skilled-worker', 'study', 'temporary-work', 'turkish-national', 'different-type'],

    validate: 'required',
    legend: {
      className: 'bold'
    }
  },
  'further-leave': {
    mixin: 'radio-group',
    options: ['fp', 'm', 'ir', 'hro'],
    validate: 'required',
    legend: {
      className: 'bold'
    }
  },
  'reference-number': {
    mixin: 'radio-group',
    options: ['record-number', 'case-id', 'ho-ref-number', 'payment-ref-number', 'courier-ref-number'],
    validate: 'required',
    legend: {
      className: 'bold'
    },
  },
  'contact-email': {
    mixin: 'input-text',
    validate: 'required',
    legend: {
      className: 'bold'
    },
  },
  'contact-telephone-number': {
    mixin: 'input-text',
    validate: 'required',
    legend: {
      className: 'bold'
    },
  },

};
