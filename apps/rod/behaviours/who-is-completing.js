module.exports = superclass => class extends superclass {
  saveValues(req, res, next) {
    const whoIsCompleting = req.form.values['who-is-completing'];
    const isMainApp = whoIsCompleting === 'applicant' ? true : false;
    const isLegalRep = whoIsCompleting === 'who-is-rep' ? true : false;
    const isSponsorOrDependant = whoIsCompleting === 'sponsor' || whoIsCompleting === 'guardian' ? true : false;
    req.sessionModel.set('isMainApp', isMainApp);
    req.sessionModel.set('isLegalRep', isLegalRep);
    req.sessionModel.set('isSponsorOrDependant', isSponsorOrDependant);
    return super.saveValues(req, res, next);
  }
};
