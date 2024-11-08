module.exports = superclass => class extends superclass {
  successHandler(req, res, next) {
    const currentRoute = req.form.options.route;
    if (currentRoute === '/who-completing') {
      const whoCompleting = req.sessionModel.get('who-is-completing');
      const isSponsor = whoCompleting === 'sponsor';
      req.sessionModel.set('isSponsor', isSponsor);
    }
    return super.successHandler(req, res, next);
  }
};
