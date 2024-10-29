const config = require('../../../config');

const NotifyClient = require('notifications-node-client').NotifyClient;
const notifyKey = config.govukNotify.notifyApiKey;
const translation = require('../translations/src/en/fields.json');
const notifyClient = new NotifyClient(notifyKey);
const dateFormatter = new Intl.DateTimeFormat(
  config.dateLocales,
  config.dateFormat
);

const getLabel = (fieldKey, fieldValue) => {
  if (Array.isArray(fieldValue)) {
    return fieldValue
      .map(option => translation[fieldKey].options[option].label)
      .join(', ');
  }
  return translation[fieldKey]?.options[fieldValue]?.label;
};

const getWhoCompletedForm = req => {
  const whoCompleted = req.sessionModel.get('cnc-who-is-completing');

  if (whoCompleted === 'applicant') {
    return getLabel(
      'cnc-who-is-completing',
      req.sessionModel.get('cnc-who-is-completing')
    );
  }

  if (whoCompleted === 'legal-rep') {
    const legalRep = getLabel(
      'cnc-who-is-representing',
      req.sessionModel.get('cnc-who-is-representing')
    );
    return legalRep + '’s legal representative';
  }

  if (whoCompleted === 'sponsor') {
    return getLabel(
      'cnc-sponsor-type',
      req.sessionModel.get('cnc-sponsor-type')
    );
  }

  if (whoCompleted === 'guardian') {
    return getLabel(
      'cnc-dependant-or-guardian',
      req.sessionModel.get('cnc-dependant-or-guardian')
    );
  }

  return '';
};

const getApplicationCategory = req => {
  const applicationReason = req.sessionModel.get('cnc-reason-for-application');

  if (applicationReason === 'visa') {
    return getLabel(
      'cnc-application-visa-type',
      req.sessionModel.get('cnc-application-visa-type')
    );
  }

  if (applicationReason === 'leave-to-remain') {
    return getLabel(
      'cnc-further-leave-to-remain',
      req.sessionModel.get('cnc-further-leave-to-remain')
    );
  }

  return getLabel(
    'cnc-reason-for-application',
    req.sessionModel.get('cnc-reason-for-application')
  );
};

const getFormattedRecordNumber = rodNumber => {
  if (!rodNumber) return null;
  const valueWithoutSpace = rodNumber.replace(/\s+/g, '');
  const containsRod = valueWithoutSpace.match(/^r[o0]d/i);
  if (containsRod) {
    return 'ROD' + valueWithoutSpace.slice(3);
  }
  return 'ROD' + valueWithoutSpace;
};

const getUserDetails = req => {
  return {
    applicant_full_name: req.sessionModel.get('cnc-main-applicant-full-name'),
    applicant_dob: dateFormatter.format(
      new Date(req.sessionModel.get('cnc-main-applicant-dob'))
    ),
    applicant_nationality: req.sessionModel.get(
      'cnc-main-applicant-nationality'
    ),
    who_completed_form: getWhoCompletedForm(req),
    application_category: getApplicationCategory(req),
    has_record_number: req.sessionModel.get('enter-record-number')
      ? 'yes'
      : 'no',
    record_number:
      getFormattedRecordNumber(req.sessionModel.get('enter-record-number')) ??
      '',
    has_case_id: req.sessionModel.get('enter-case-id') ? 'yes' : 'no',
    case_id: req.sessionModel.get('enter-case-id') ?? '',
    has_ho_reference_number: req.sessionModel.get('enter-ho-reference-number')
      ? 'yes'
      : 'no',
    ho_reference_number:
      req.sessionModel.get('enter-ho-reference-number') ?? '',
    has_payment_reference_number: req.sessionModel.get(
      'enter-payment-reference-number'
    )
      ? 'yes'
      : 'no',
    payment_reference_number:
      req.sessionModel.get('enter-payment-reference-number') ?? '',
    has_courier_reference_number: req.sessionModel.get(
      'enter-courier-reference-number'
    )
      ? 'yes'
      : 'no',
    courier_reference_number:
      req.sessionModel.get('enter-courier-reference-number') ?? '',
    contact_email: req.sessionModel.get('cnc-email'),
    contact_telephone: req.sessionModel.get('cnc-telephone')
  };
};

module.exports = class SendEmailConfirmation {
  async sendUserEmailNotification(req) {
    const personalisation = getUserDetails(req);
    try {
      await notifyClient.sendEmail(
        config.govukNotify.userConfirmationTemplateId,
        req.sessionModel.get('cnc-email'),
        {
          personalisation: Object.assign({}, personalisation)
        }
      );

      req.log('info', 'User Confirmation Email sent successfully');
    } catch (err) {
      const errorDetails = err.response?.data
        ? `Cause: ${JSON.stringify(err.response.data)}`
        : '';
      const errorCode = err.code ? `${err.code} -` : '';
      const errorMessage = `${errorCode} ${err.message}; ${errorDetails}`;

      req.log('error', 'Failed to send User Confirmation Email', errorMessage);
      throw Error(errorMessage);
    }
  }

  async sendCaseworkerEmailNotification(req) {
    const personalisation = getUserDetails(req);

    try {
      await notifyClient.sendEmail(
        config.govukNotify.businessConfirmationTemplateId,
        config.govukNotify.caseworkerEmail,
        {
          personalisation: Object.assign({}, personalisation)
        }
      );

      req.log('info', 'Business Confirmation Email sent successfully');
    } catch (err) {
      const errorDetails = err.response?.data
        ? `Cause: ${JSON.stringify(err.response.data)}`
        : '';
      const errorCode = err.code ? `${err.code} -` : '';
      const errorMessage = `${errorCode} ${err.message}; ${errorDetails}`;

      req.log(
        'error',
        'Failed to send Business Confirmation Email',
        errorMessage
      );
      throw Error(errorMessage);
    }
  }

  async send(req) {
    try {
      await this.sendUserEmailNotification(req);
      await this.sendCaseworkerEmailNotification(req);

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
