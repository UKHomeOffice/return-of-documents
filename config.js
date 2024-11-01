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
    DNRuserConfirmationTemplateId: process.env.DNR_USER_CONFIRMATION_TEMPLATE_ID,
    DNRbusinessConfirmationTemplateId:
      process.env.DNR_BUSINESS_CONFIRMATION_TEMPLATE_ID,
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
