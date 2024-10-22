module.exports = superclass => class extends superclass {
  validateField(key, req) {
    const validationErrorFunc = (type, args) => new this.ValidationError(key, { type: type, arguments: [args] });

    if (key === 'cancel-application') {
      const dependent = req.form.options.fields[key].dependent;
      const dependentValue = req.sessionModel.get(dependent.field);

      if (dependentValue && dependentValue === dependent.value) {
        return null;
      }
      const isCancelApplicationProvided = req.body[key] !== undefined;
      if (!isCancelApplicationProvided) {
        return validationErrorFunc('required', 'You must indicate whether you want to cancel the application.');
      }
    }
    return super.validateField(key, req);
  }
};
