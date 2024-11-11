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
    dnrBusinessConfirmationTemplateId: process.env.DNR_BUSINESS_CONFIRMATION_TEMPLATE_ID,
    caseworkerMqtEmail: process.env.CASEWORKER_MQT_EMAIL,
    caseworkerWorkRoutesEmail: process.env.CASEWORKER_WORK_ROUTES_EMAIL,
    caseworkerRequestEmail: process.env.CASEWORKER_REQUEST_EMAIL,
    caseworkerFamilyEmail: process.env.CASEWORKER_FAMILY_EMAIL,
    caseworkerEuEmail: process.env.CASEWORKER_EU_EMAIL,
    cncUserConfirmationTemplateId: process.env.CNC_USER_CONFIRMATION_TEMPLATE_ID,
    cncBusinessConfirmationTemplateId: process.env.CNC_BUSINESS_CONFIRMATION_TEMPLATE_ID
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
