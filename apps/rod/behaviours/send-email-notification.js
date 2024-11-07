const config = require('../../../config');
const {
  getFormattedRecordNumber,
  getLabel,
  getValueOfDefault,
  getYesOrNoStr
} = require('../../../utils');

const NotifyClient = require('notifications-node-client').NotifyClient;
const notifyKey = config.govukNotify.notifyApiKey;
const translation = require('../translations/src/en/fields.json');
const notifyClient = new NotifyClient(notifyKey);
const dateFormatter = new Intl.DateTimeFormat(
  config.dateLocales,
  config.dateFormat
);

const USER = 'user';
const BUSINESS = 'business';

const getLabelForField = (req, field) => {
  return getLabel(field, req.sessionModel.get(field), translation);
};

const getWhoCompletedForm = req => {
  const whoCompleted = req.sessionModel.get('who-is-completing');
  console.log(whoCompleted);

  if (whoCompleted === 'applicant') {
    return getLabelForField(req, 'who-is-completing');
  }

  if (whoCompleted === 'legal-rep-name') {
    const legalRep = getLabelForField(req, 'legal-rep-name');
    return legalRep + '’s legal representative';
  }

  if (whoCompleted === 'sponsor') {
    return getLabelForField(req, 'cnc-sponsor-type');
  }

  if (whoCompleted === 'guardian') {
    return getLabelForField(req, 'cnc-dependant-or-guardian');
  }

  return '';
};

const getApplicationCategory = req => {
  const applicationReason = req.sessionModel.get('cnc-reason-for-application');

  if (applicationReason === 'visa') {
    return getLabelForField(req, 'cnc-application-visa-type');
  }

  if (applicationReason === 'leave-to-remain') {
    return getLabelForField(req, 'cnc-further-leave-to-remain');
  }

  return getLabelForField(req, 'cnc-reason-for-application');
};

const getUserDetails = req => {
  return {
    person_completing: getWhoCompletedForm(req)
  };
};


module.exports = class SendEmailConfirmation {
  async sendEmailNotification(req, recipientType) {
    const personalisation = getUserDetails(req);


    // FIXME: use updated template id and emails
    const templateId =
      recipientType === USER
        ? config.govukNotify.userConfirmationTemplateId
        : config.govukNotify.businessConfirmationTemplateId;

    const recipientEmailAddress =
      recipientType === USER
        ? req.sessionModel.get('contact-email')
        : config.govukNotify.caseworkerEmail;

    const userOrBusinessStr = () =>
      recipientType === USER ? 'User' : 'Business';

    // try {
    //   await notifyClient.sendEmail('TODO', recipientEmailAddress, {
    //     personalisation: Object.assign({}, personalisation)
    //   });

    //   req.log(
    //     'info',
    //     `${userOrBusinessStr()} Confirmation Email sent successfully`
    //   );
    // } catch (err) {
    //   const errorDetails = err.response?.data
    //     ? `Cause: ${JSON.stringify(err.response.data)}`
    //     : '';
    //   const errorCode = err.code ? `${err.code} -` : '';
    //   const errorMessage = `${errorCode} ${err.message}; ${errorDetails}`;

    //   req.log(
    //     'error',
    //     `Failed to send ${userOrBusinessStr()} Confirmation Email`,
    //     errorMessage
    //   );
    //   throw Error(errorMessage);
    // }
  }

  async send(req) {
    try {
      await this.sendEmailNotification(req, USER);
      await this.sendEmailNotification(req, BUSINESS);

      req.log(
        'info',
        'Request to send notification emails completed successfully.'
      );
    } catch (err) {
      req.log('error', `Failed to send all notifications emails. ${err}`);
      throw err;
    }
  }
};
