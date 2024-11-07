const validators = require('hof/controller/validation/validators');

module.exports = superclass => class extends superclass {
  validateField(key, req) {
    const validationErrorFunc = (type, args) =>
      new this.ValidationError(key, { type: type, arguments: [args] });

    if (key === 'cancel-application') {
      const dependent = req.form.options.fields[key].dependent;
      const dependentValue = req.sessionModel.get(dependent.field);
      if (dependentValue && dependentValue === dependent.value) {
        return null;
      }
    }

    if (req.form.values['rod-reference-number']?.includes('ho-reference-number') &&
    key === 'rod-ho-reference-number') {
      const hoRefNum = req.form.values[key];
      if (hoRefNum) {
        const valueWithoutSpace = hoRefNum.replace(/\s+/g, '').trim();

        if (!validators.minlength(valueWithoutSpace, 8)) {
          return validationErrorFunc('minlength', 8);
        }
        if (!validators.maxlength(valueWithoutSpace, 8)) {
          return validationErrorFunc('maxlength', 8);
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
