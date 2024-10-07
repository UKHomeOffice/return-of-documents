
module.exports = superclass => class extends superclass {
  locals(req, res) {
    const locals = super.locals(req, res);
    const currentUrl = locals.route;
    // enable related services menu only on start page
    if (currentUrl === 'start') {
      locals.enableSection = true;
      return locals;
    }
    return locals;
  }
};
