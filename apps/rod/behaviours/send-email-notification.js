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
  return getLabel(field, req.sessionModel.get(field), translation);
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

const getUserDetails = req => {
  return {
    record_number: req.sessionModel.get('uniqueRefNumber'),
    person_completing: getWhoCompletedForm(req),
    application_category: getApplicationCategory(req),
    application_submitted_date: dateFormatter.format(
      new Date(getValueOfDefault(req, 'date-of-application'))
    ),
    cancel_application: getValueOfDefault(req, 'cancel-application'),
    applicant_passport: getValueOfDefault(
      req,
      'is-requesting-passport-to-travel'
    ),
    reference_number: '',
    has_case_id: '',
    case_id: '',
    has_ho_reference_number: '',
    ho_reference_number: '',
    has_payment_reference_number: '',
    payment_reference_number: '',
    has_courier_reference_number: '',
    courier_reference_number: '',
    your_documents: getValueOfDefault(req, 'yourDocuments'),
    document_description: getValueOfDefault(req, 'document-description'),
    applicant_full_name: getValueOfDefault(req, 'main-applicant-full-name'),
    applicant_dob: dateFormatter.format(
      new Date(getValueOfDefault(req, 'main-applicant-dob'))
    ),
    applicant_nationality: getValueOfDefault(req, 'main-applicant-nationality'),
    applicant_address: '',
    delivery_address: getValueOfDefault(req, 'deliveryAddress'),
    contact_email: getValueOfDefault(req, 'contact-email'),
    contact_telephone: getValueOfDefault(req, 'contact-telephone'),
    notes: getValueOfDefault(req, 'notes')
  };
};

const visaTypeEmailMap = [
  {
    visaType: 'visa-type-british',
    email: ''
  },
  {
    visaType: 'visa-type-talent',
    email: ''
  },
  {
    visaType: 'visa-type-skilled',
    email: ''
  },
  {
    visaType: 'visa-type-study',
    email: ''
  },
  {
    visaType: 'visa-type-temp',
    email: ''
  },
  {
    visaType: 'visa-type-turkish',
    email: ''
  }
];

const flrTypeEmailMap = [
  {
    flrType: 'flr-fp',
    email: ''
  },
  {
    flrType: 'flr-m',
    email: ''
  },
  {
    flrType: 'flr-ir',
    email: ''
  },
  {
    flrType: 'flr-hro',
    email: ''
  }
];

const otherApplicationTypeEmailMap = [
  {
    appType: 'not-time-limit',
    email: ''
  },
  {
    appType: 'eu-settlement-scheme',
    email: ''
  },
  {
    appType: 'settlement',
    email: ''
  },
  {
    appType: 'limited-leave-replacement-brp',
    email: ''
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
    return '';
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
    console.log(personalisation);

    // FIXME: use updated emails
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

    // try {
    //   await notifyClient.sendEmail(templateId, recipientEmailAddress, {
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
