const SendEmailConfirmation = require('./send-email-notification');

module.exports = superclass =>
  class extends superclass {
    async successHandler(req, res, next) {
      try {
        const crs = await import('crypto-random-string');
        const randomDigits = crs.default({ length: 9, type: 'numeric' });
        const uniqueRodReference = `ROD${randomDigits}`;
        req.sessionModel.set('uniqueRodReference', uniqueRodReference);
      } catch (error) {
        req.log(
          'error',
          'Failed to generate ROD reference number',
          error
        );
        return next(
          Error(`Failed to generate ROD reference number: ${error}`)
        );
      }

      const notifyEmail = new SendEmailConfirmation();
      try {
        await notifyEmail.send(req, res, super.locals(req, res));
      } catch (error) {
        req.log('error', 'Failed to send notification emails:', error);
        return next(Error(`Failed to send notification emails: ${error}`));
      }

      return super.successHandler(req, res, next);
    }
  };
