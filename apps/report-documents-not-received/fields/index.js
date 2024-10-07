'use strict';

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
  }
};
