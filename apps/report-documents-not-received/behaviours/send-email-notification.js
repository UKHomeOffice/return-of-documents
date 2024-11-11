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

const getApplicationCategory = req => {
  const applicationReason = req.sessionModel.get('dnr-application-type');

  if (applicationReason === 'dnr-visa') {
    return getLabelForField(req, 'dnr-visa-type');
  }

  if (applicationReason === 'dnr-further-leave') {
    return getLabelForField(req, 'dnr-further-leave-to-remain');
  }

  return getLabelForField(req, 'dnr-application-type');
};

const getUserDetails = req => {
  return {
    applicant_full_name: req.sessionModel.get('dnr-full-name'),
    applicant_dob: dateFormatter.format(
      new Date(getValueOfDefault(req, 'dnr-dob'))
    ),
    applicant_nationality: getValueOfDefault(
      req,
      'dnr-nationality'
    ),
    application_category: getApplicationCategory(req),
    has_record_number: getYesOrNoStr(req, 'dnr-record-number'),
    record_number:
      getFormattedRecordNumber(getValueOfDefault(req, 'dnr-record-number')) ??
      '',
    has_case_id: getYesOrNoStr(req, 'dnr-case-id'),
    case_id: getValueOfDefault(req, 'dnr-case-id'),
    has_ho_reference_number: getYesOrNoStr(req, 'dnr-ho-reference-number'),
    ho_reference_number: getValueOfDefault(req, 'dnr-ho-reference-number'),
    has_payment_reference_number: getYesOrNoStr(
      req,
      'dnr-payment-reference-number'
    ),
    payment_reference_number: getValueOfDefault(
      req,
      'dnr-payment-reference-number'
    ),
    has_courier_reference_number: getYesOrNoStr(
      req,
      'dnr-courier-reference-number'
    ),
    courier_reference_number: getValueOfDefault(
      req,
      'dnr-courier-reference-number'
    ),
    contact_email: getValueOfDefault(req, 'dnr-email'),
    contact_telephone: getValueOfDefault(req, 'dnr-telephone')
  };
};


const valueForMailbox = req => {
  const steps = req.sessionModel.get('steps');
  const dnrVisaTypeValue = req.sessionModel.get('dnr-visa-type');
  const dnrApplicationTypeValue = req.sessionModel.get('dnr-application-type');

  return {
    steps,
    dnrVisaTypeValue,
    dnrApplicationTypeValue
  };
};

const whichBusinessMailbox = req => {
  const values = valueForMailbox(req);

  if (values.steps.includes('/documents-not-received-further-leave')) {
    return config.govukNotify.caseworkerFamilyEmail;
  }

  if (values.dnrVisaTypeValue !== 'dnr-visa-type-british' &&
    values.steps.includes('/documents-not-received-visa-type')) {
    return config.govukNotify.caseworkerWorkRoutesEmail;
  }

  if (values.dnrApplicationTypeValue === 'dnr-not-time-limit' ||
    values.dnrApplicationTypeValue === 'dnr-settlement') {
    return config.govukNotify.caseworkerMqtEmail;
  }

  if (values.dnrApplicationTypeValue === 'dnr-british-citizen') {
    return config.govukNotify.caseworkerRequestEmail;
  }

  if (values.dnrApplicationTypeValue === 'dnr-eu-settlement-scheme') {
    return config.govukNotify.caseworkerEuEmail;
  }

  if (values.dnrApplicationTypeValue === 'dnr-limited-leave-replacement-brp') {
    return config.govukNotify.caseworkerWorkRoutesEmail;
  }

  if (values.dnrVisaTypeValue === 'dnr-visa-type-british') {
    return config.govukNotify.caseworkerMqtEmail;
  }
  return null;
};

module.exports = class SendEmailConfirmation {
  async sendEmailNotification(req, recipientType) {
    const personalisation = getUserDetails(req);

    const templateId =
      recipientType === USER
        ? config.govukNotify.dnrUserConfirmationTemplateId
        : config.govukNotify.dnrBusinessConfirmationTemplateId;

    const recipientEmailAddress =
      recipientType === USER
        ? req.sessionModel.get('dnr-email')
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
