module.exports = superclass => class extends superclass {
  validateField(key, req) {
    if (key === 'cancel-application') {
      const dependent = req.form.options.fields[key].dependent;
      const dependentValue = req.sessionModel.get(dependent.field);
      if (dependentValue && dependentValue === dependent.value) {
        return null;
      }
    }
    return super.validateField(key, req);
  }
};
