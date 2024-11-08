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
    dnrCaseworkerEmailMQT: process.env.DNR_CASEWORKER_EMAIL_MQT,
    dnrCaseworkerEmailWorkRoutes: process.env.DNR_CASEWORKER_EMAIL_WORK_ROUTES,
    dnrCaseworkerEmailRequest: process.env.DNR_CASEWORKER_EMAIL_REQUEST,
    dnrCaseworkerEmailFamily: process.env.DNR_CASEWORKER_EMAIL_FAMILY,
    dnrCaseworkerEmailEU: process.env.DNR_CASEWORKER_EMAIL_EU,
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
