module.exports = superclass => class extends superclass {
  successHandler(req, res, next) {
    const currentRoute = req.form.options.route;
    if (currentRoute === '/who-completing') {
      const whoCompleting = req.sessionModel.get('who-is-completing');
      const isSponsor = whoCompleting === 'sponsor';
      req.sessionModel.set('isSponsor', isSponsor);
      req.sessionModel.set('nextRoute', '/application');
    }
    if (currentRoute === '/about-application') {
      const isSponsor = req.sessionModel.get('isSponsor');
      req.sessionModel.set('showCancelApplicationQuestion', !isSponsor);
    }
    if (currentRoute === '/confirm') {
      const showCancelApplicationQuestion = req.sessionModel.get('showCancelApplicationQuestion');
      if (!showCancelApplicationQuestion) {
        req.form.options.cancelApplicationQuestion = null;
      }
    }
    return super.successHandler(req, res, next);
  }
};
