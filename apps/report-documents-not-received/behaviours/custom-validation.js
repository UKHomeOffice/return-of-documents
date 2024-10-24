const validators = require('hof/controller/validation/validators');

module.exports = superclass =>
  class extends superclass {
    validateField(key, req) {
      const validationErrorFunc = (type, args) =>
        new this.ValidationError(key, { type: type, arguments: [args] });

      if (key === 'dnr-record-number') {
        const recordNum = req.form.values[key];
        if (recordNum) {
          const valueWithoutSpace = recordNum.replace(/\s+/g, '').trim();

          if (!validators.minlength(valueWithoutSpace, 9)) {
            return validationErrorFunc('minlength');
          }

          if (!validators.maxlength(valueWithoutSpace, 12)) {
            return validationErrorFunc('maxlength');
          }

          if (!valueWithoutSpace.match(/^(R[O0]D\d{9}|\d{9})$/i)) {
            return validationErrorFunc('recordNum');
          }
        }
      }

      if (key === 'dnr-ho-reference-number') {
        const hoRefNum = req.form.values[key];
        if (hoRefNum) {
          const valueWithoutSpace = hoRefNum.replace(/\s+/g, '').trim();

          if (!validators.minlength(valueWithoutSpace, 8)) {
            return validationErrorFunc('minlength');
          }

          if (!validators.maxlength(valueWithoutSpace, 8)) {
            return validationErrorFunc('maxlength');
          }

          if (valueWithoutSpace.match(/\W|_/g)) {
            return validationErrorFunc('specialCharacter');
          }

          if (!valueWithoutSpace.match(/^[A-Z]\d+$/i)) {
            return validationErrorFunc('hoRefNum');
          }
        }
      }

      if (key === 'dnr-telephone') {
        const phoneNumber = req.form.values[key];
        if (phoneNumber.length > 0) {
          const phoneNumberWithoutSpace = phoneNumber.replace(/\s+/g, '').trim();
          const isValidphoneNumber = validators.regex(phoneNumberWithoutSpace, /^\(?\+?[\d()-]{8,16}$/);
          if (!isValidphoneNumber  || !validators.internationalPhoneNumber(phoneNumber)) {
            return validationErrorFunc('validInternationalPhoneNumber');
          }
        }
      }

      return super.validateField(key, req);
    }
  };
