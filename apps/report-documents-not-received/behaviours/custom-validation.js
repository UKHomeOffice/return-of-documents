
module.exports = superclass => class extends superclass {
  validateField(key, req) {
    const validationErrorFunc = (type, args) => new this.ValidationError(key, {type: type, arguments: [args]});

    if(key === 'dnr-dob') {
      const dnrDob = req.form.values[key];

      if(!dnrDob) {
        return validationErrorFunc('required');
      }

      if (!req.body['dnr-dob-day'] && req.body['dnr-dob-month'] && req.body['dnr-dob-year']) {
        return validationErrorFunc('dnrDobDay');
      }

      if (!req.body['dnr-dob-month'] && req.body['dnr-dob-year'] && req.body['dnr-dob-day']) {
        return validationErrorFunc('dnrDobMonth');
      }

      if (!req.body['dnr-dob-year'] && req.body['dnr-dob-month'] && req.body['dnr-dob-day']) {
        return validationErrorFunc('dnrDobYear');
      }
    }


    return super.validateField(key, req);
  }
};
