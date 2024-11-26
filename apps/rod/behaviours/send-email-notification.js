const config = require('../../../config');
const {
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
  return getLabel(field, req.sessionModel.get(field), translation) ?? '';
};

const getWhoCompletedForm = req => {
  const whoCompleted = req.sessionModel.get('who-is-completing');

  if (whoCompleted === 'applicant') {
    return getLabelForField(req, 'who-is-completing');
  }

  if (whoCompleted === 'who-is-rep') {
    const legalRep = getLabelForField(req, 'who-is-representing');
    return legalRep + '’s legal representative';
  }

  if (whoCompleted === 'sponsor') {
    return getLabelForField(req, 'sponsor-type');
  }

  if (whoCompleted === 'guardian') {
    return getLabelForField(req, 'dependant-or-guardian');
  }

  return '';
};

const getApplicationCategory = req => {
  const applicationType = req.sessionModel.get('application-type');

  if (applicationType === 'visa') {
    return getLabelForField(req, 'visa-type');
  }

  if (applicationType === 'further-leave') {
    return getLabelForField(req, 'further-leave-to-remain');
  }

  return getLabelForField(req, 'application-type');
};

const hasCancelApplication = req => {
  if (req.sessionModel.get('isSponsor')) {
    return 'no';
  }

  const cancelApplication = req.sessionModel.get('cancel-application');
  return cancelApplication ? 'yes' : 'no';
};

const getUserDetails = req => {
  return {
    record_number: req.sessionModel.get('uniqueRodReference'),
    person_completing: getWhoCompletedForm(req),
    application_category: getApplicationCategory(req),
    application_submitted_date: dateFormatter.format(
      new Date(getValueOfDefault(req, 'date-of-application'))
    ),
    has_cancel_application: hasCancelApplication(req),
    cancel_application: getLabelForField(req, 'cancel-application') || 'No',
    has_applicant_passport:
      !req.sessionModel.get('isSponsor') &&
      req.sessionModel.get('is-requesting-passport-to-travel')
        ? 'yes'
        : 'no',
    applicant_passport: getLabelForField(
      req,
      'is-requesting-passport-to-travel'
    ),
    reference_number: getValueOfDefault(req, 'selectedRefNumbers'),
    has_case_id: getYesOrNoStr(req, 'rod-case-id'),
    case_id: getValueOfDefault(req, 'rod-case-id'),
    has_ho_reference_number: getYesOrNoStr(req, 'rod-ho-reference-number'),
    ho_reference_number: getValueOfDefault(req, 'rod-ho-reference-number'),
    has_payment_reference_number: getYesOrNoStr(
      req,
      'rod-payment-reference-number'
    ),
    payment_reference_number: getValueOfDefault(
      req,
      'rod-payment-reference-number'
    ),
    has_courier_reference_number: getYesOrNoStr(
      req,
      'rod-courier-reference-number'
    ),
    courier_reference_number: getValueOfDefault(
      req,
      'rod-courier-reference-number'
    ),
    has_your_documents: getYesOrNoStr(req, 'yourDocuments'),
    your_documents: getValueOfDefault(req, 'yourDocuments'),
    has_document_description: getYesOrNoStr(req, 'document-description'),
    document_description: getValueOfDefault(req, 'document-description'),
    applicant_full_name: getValueOfDefault(req, 'main-applicant-full-name'),
    applicant_dob: dateFormatter.format(
      new Date(getValueOfDefault(req, 'main-applicant-dob'))
    ),
    applicant_nationality: getValueOfDefault(req, 'main-applicant-nationality'),
    applicant_address: getValueOfDefault(req, 'applicantAddress'),
    delivery_address: getValueOfDefault(req, 'deliveryAddress'),
    contact_email: getValueOfDefault(req, 'contact-email'),
    contact_telephone: getValueOfDefault(req, 'contact-telephone'),
    has_notes: getYesOrNoStr(req, 'notes'),
    notes: getValueOfDefault(req, 'notes')
  };
};

const visaTypeEmailMap = [
  {
    visaType: 'visa-type-british',
    email: config.govukNotify.caseworkerMqtEmail
  },
  {
    visaType: 'visa-type-talent',
    email: config.govukNotify.caseworkerWorkRoutesEmail
  },
  {
    visaType: 'visa-type-skilled',
    email: config.govukNotify.caseworkerWorkRoutesEmail
  },
  {
    visaType: 'visa-type-study',
    email: config.govukNotify.caseworkerWorkRoutesEmail
  },
  {
    visaType: 'visa-type-temp',
    email: config.govukNotify.caseworkerWorkRoutesEmail
  },
  {
    visaType: 'visa-type-turkish',
    email: config.govukNotify.caseworkerWorkRoutesEmail
  }
];

const flrTypeEmailMap = [
  {
    flrType: 'flr-fp',
    email: config.govukNotify.caseworkerFamilyEmail
  },
  {
    flrType: 'flr-m',
    email: config.govukNotify.caseworkerFamilyEmail
  },
  {
    flrType: 'flr-ir',
    email: config.govukNotify.caseworkerFamilyEmail
  },
  {
    flrType: 'flr-hro',
    email: config.govukNotify.caseworkerFamilyEmail
  }
];

const otherApplicationTypeEmailMap = [
  {
    appType: 'not-time-limit',
    email: config.govukNotify.caseworkerMqtEmail
  },
  {
    appType: 'eu-settlement-scheme',
    email: config.govukNotify.caseworkerEuEmail
  },
  {
    appType: 'settlement',
    email: config.govukNotify.caseworkerMqtEmail
  },
  {
    appType: 'limited-leave-replacement-brp',
    email: config.govukNotify.caseworkerWorkRoutesEmail
  }
];

function getBusinessEmail(req) {
  const applicationType = req.sessionModel.get('application-type');

  if (applicationType === 'visa') {
    const selectedVisaType = req.sessionModel.get('visa-type');
    const visaEmail = visaTypeEmailMap.find(
      item => item.visaType === selectedVisaType
    );
    if (visaEmail?.email) {
      return visaEmail?.email;
    }
  }
  if (applicationType === 'british-citizen') {
    return config.govukNotify.caseworkerRequestEmail;
  }

  if (applicationType === 'further-leave') {
    const flrType = req.sessionModel.get('further-leave-to-remain');

    const flyEmail = flrTypeEmailMap.find(item => item.flrType === flrType);
    if (flyEmail?.email) {
      return flyEmail.email;
    }
  }

  const otherEmailType = otherApplicationTypeEmailMap.find(
    item => item.appType === applicationType
  );

  if (otherEmailType?.email) {
    return otherEmailType.email;
  }

  return null;
}
module.exports = class SendEmailConfirmation {
  async sendEmailNotification(req, recipientType) {
    const personalisation = getUserDetails(req);

    const templateId =
      recipientType === USER
        ? config.govukNotify.rodUserConfirmationTemplateId
        : config.govukNotify.rodBusinessConfirmationTemplateId;

    const recipientEmailAddress =
      recipientType === USER
        ? req.sessionModel.get('contact-email')
        : getBusinessEmail(req);

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
