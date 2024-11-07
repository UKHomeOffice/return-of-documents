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
    dnrCaseworkerEmail: process.env.CASEWORKER_EMAIL,
    dnrCaseworkerEmail1: process.env.CASEWORKER_EMAIL_1,
    dnrCaseworkerEmail2: process.env.CASEWORKER_EMAIL_2,
    dnrCaseworkerEmail3: process.env.CASEWORKER_EMAIL_3,
    dnrCaseworkerEmail4: process.env.CASEWORKER_EMAIL_4,
    dnrCaseworkerEmail5: process.env.CASEWORKER_EMAIL_5
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
