const validators = require('hof/controller/validation/validators');

module.exports = superclass =>
  class extends superclass {
    validateField(key, req) {
      const validationErrorFunc = (type, args) =>
        new this.ValidationError(key, { type: type, arguments: [args] });

      if (
        req.form.values['dnr-reference-number'] === 'dnr-record-number' &&
        key === 'dnr-record-number'
      ) {
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

      if (
        req.form.values['dnr-reference-number'] === 'dnr-ho-reference-number' &&
        key === 'dnr-ho-reference-number'
      ) {
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

      return super.validateField(key, req);
    }
  };
