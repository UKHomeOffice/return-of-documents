'use strict';
const env = process.env.NODE_ENV || 'production';

module.exports = {
  dateLocales: 'en-GB',
  dateFormat: {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  },
  env: env,
  govukNotify: {
    notifyApiKey: process.env.NOTIFY_KEY,
    dnrUserConfirmationTemplateId: process.env.DNR_USER_CONFIRMATION_TEMPLATE_ID,
    dnrBusinessConfirmationTemplateId:
      process.env.DNR_BUSINESS_CONFIRMATION_TEMPLATE_ID,
    CaseworkerMqtEmail: process.env.CASEWORKER_MQT_EMAIL,
    CaseworkerWorkRoutesEmail: process.env.CASEWORKER_WORK_ROUTES_EMAIL,
    CaseworkerRequestEmail: process.env.CASEWORKER_REQUEST_EMAIL,
    CaseworkerFamilyEmail: process.env.CASEWORKER_FAMILY_EMAIL,
    CaseworkerEuEmail: process.env.CASEWORKER_EU_EMAIL,
    userConfirmationTemplateId: process.env.CNC_USER_CONFIRMATION_TEMPLATE_ID,
    businessConfirmationTemplateId:
      process.env.CNC_BUSINESS_CONFIRMATION_TEMPLATE_ID,
    caseworkerEmail: process.env.CASEWORKER_EMAIL
  },
  survey: {
    urls: {
      root: 'https://www.hof-feedback.homeoffice.gov.uk'
    }
  },
  redis: {
    port: process.env.REDIS_PORT || '6379',
    host: process.env.REDIS_HOST || '127.0.0.1'
  }
};
