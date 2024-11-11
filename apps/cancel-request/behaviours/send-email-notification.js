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
  const whoCompleted = req.sessionModel.get('cnc-who-is-completing');

  if (whoCompleted === 'applicant') {
    return getLabelForField(req, 'cnc-who-is-completing');
  }

  if (whoCompleted === 'legal-rep') {
    const legalRep = getLabelForField(req, 'cnc-who-is-representing');
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
    applicant_full_name: req.sessionModel.get('cnc-main-applicant-full-name'),
    applicant_dob: dateFormatter.format(
      new Date(getValueOfDefault(req, 'cnc-main-applicant-dob'))
    ),
    applicant_nationality: getValueOfDefault(
      req,
      'cnc-main-applicant-nationality'
    ),
    who_completed_form: getWhoCompletedForm(req),
    application_category: getApplicationCategory(req),
    has_record_number: getYesOrNoStr(req, 'enter-record-number'),
    record_number:
      getFormattedRecordNumber(getValueOfDefault(req, 'enter-record-number')) ??
      '',
    has_case_id: getYesOrNoStr(req, 'enter-case-id'),
    case_id: getValueOfDefault(req, 'enter-case-id'),
    has_ho_reference_number: getYesOrNoStr(req, 'enter-ho-reference-number'),
    ho_reference_number: getValueOfDefault(req, 'enter-ho-reference-number'),
    has_payment_reference_number: getYesOrNoStr(
      req,
      'enter-payment-reference-number'
    ),
    payment_reference_number: getValueOfDefault(
      req,
      'enter-payment-reference-number'
    ),
    has_courier_reference_number: getYesOrNoStr(
      req,
      'enter-courier-reference-number'
    ),
    courier_reference_number: getValueOfDefault(
      req,
      'enter-courier-reference-number'
    ),
    contact_email: getValueOfDefault(req, 'cnc-email'),
    contact_telephone: getValueOfDefault(req, 'cnc-telephone')
  };
};

const valueForMailbox = req => {
  const steps = req.sessionModel.get('steps');
  const cncVisaTypeValue = req.sessionModel.get('cnc-application-visa-type');
  const cncApplicationTypeValue = req.sessionModel.get(
    'cnc-reason-for-application'
  );

  return {
    steps,
    cncVisaTypeValue,
    cncApplicationTypeValue
  };
};

const whichBusinessMailbox = req => {
  const values = valueForMailbox(req);

  if (values.steps.includes('/cancel-request-further-leave')) {
    return config.govukNotify.caseworkerFamilyEmail;
  }

  if (
    values.cncVisaTypeValue !== 'british-national' &&
    values.steps.includes('/cancel-request-visa-type')
  ) {
    return config.govukNotify.caseworkerWorkRoutesEmail;
  }

  if (
    values.cncApplicationTypeValue === 'ntl-or-brp' ||
    values.cncApplicationTypeValue === 'settlement'
  ) {
    return config.govukNotify.caseworkerMqtEmail;
  }

  if (values.cncApplicationTypeValue === 'british-citizenship') {
    return config.govukNotify.caseworkerRequestEmail;
  }

  if (values.cncApplicationTypeValue === 'european-settlement-scheme') {
    return config.govukNotify.caseworkerEuEmail;
  }

  if (values.cncApplicationTypeValue === 'toc-or-brp') {
    return config.govukNotify.caseworkerWorkRoutesEmail;
  }

  if (values.cncVisaTypeValue === 'british-national') {
    return config.govukNotify.caseworkerMqtEmail;
  }
  return null;
};

module.exports = class SendEmailConfirmation {
  async sendEmailNotification(req, recipientType) {
    const personalisation = getUserDetails(req);

    const templateId =
      recipientType === USER
        ? config.govukNotify.userConfirmationTemplateId
        : config.govukNotify.businessConfirmationTemplateId;

    const recipientEmailAddress =
      recipientType === USER
        ? req.sessionModel.get('cnc-email')
        : whichBusinessMailbox(req);

    const userOrBusinessStr = () =>
      recipientType === USER ? 'User' : 'Business';

    try {
      await notifyClient.sendEmail(templateId, recipientEmailAddress, {
        personalisation: Object.assign({}, personalisation)
      });

      req.log(
        'info',
        `${userOrBusinessStr()} Confirmation Email sent successfully`
      );
    } catch (err) {
      const errorDetails = err.response?.data
        ? `Cause: ${JSON.stringify(err.response.data)}`
        : '';
      const errorCode = err.code ? `${err.code} -` : '';
      const errorMessage = `${errorCode} ${err.message}; ${errorDetails}`;

      req.log(
        'error',
        `Failed to send ${userOrBusinessStr()} Confirmation Email`,
        errorMessage
      );
      throw Error(errorMessage);
    }
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
