'use strict';

const config = require('../../../config');
const dateFormater = new Intl.DateTimeFormat(
  config.dateLocales,
  config.dateFormat
);

module.exports = {
  sectionHeader: [
    {
      step: '/who-completing',
      field: 'who-is-completing'
    },
    {
      step: '/who-representing',
      field: 'who-is-representing'
    },
    {
      step: '/sponsor-type',
      field: 'sponsor-type'
    },
    {
      step: '/about-application',
      field: 'date-of-application',
      parse: d => d && dateFormater.format(new Date(d))
    },
    {
      step: '/about-application',
      field: 'cancel-application'
    },
    {
      step: '/dependant-or-guardian',
      field: 'dependant-or-guardian'
    },
    {
      step: '/legal-representation',
      field: 'legal-rep-name'
    },
    {
      step: '/application',
      field: 'application-type'
    },
    {
      step: '/visa-type',
      field: 'visa-type'
    },
    {
      step: '/further-leave',
      field: 'further-leave-to-remain'
    },
    {
      step: '/about-application',
      field: 'cancel-application'
    },
    {
      step: '/main-applicant-passport',
      field: 'is-requesting-passport-to-travel'
    },
    {
      step: '/reuse-main-applicant-address',
      field: 'is-passport-return-address'
    },
    {
      step: '/main-applicant',
      field: 'main-applicant-full-name'
    },
    {
      step: '/main-applicant',
      field: 'main-applicant-dob',
      parse: d => d && dateFormater.format(new Date(d))
    },
    {
      step: '/main-applicant',
      field: 'main-applicant-nationality'
    },
    {
      step: '/your-documents',
      field: 'document-type',
      parse: (value, req) => {
        return  Array.isArray(value) ?
          value.map(option => option === 'Other' ? req.sessionModel.get('enter-document-type') : option).join(', ') :
          value;
      }
    },
    {
      step: '/your-documents',
      field: 'document-description'
    },
    {
      step: '/enter-delivery-address',
      field: 'delivery-address-details',
      parse: (value, req) => {
        const deliveryAddress = [
          req.sessionModel.get('delivery-address-line-1'),
          req.sessionModel.get('delivery-address-town-or-city'),
          req.sessionModel.get('delivery-address-postcode')
        ];
        const addressLine2 = req.sessionModel.get('delivery-address-line-2');
        if (addressLine2) {
          deliveryAddress.splice(1, 0, addressLine2);
        }
        req.sessionModel.set('deliveryAddress', deliveryAddress.join(', '));
        return deliveryAddress.join(', \n');
      }
    },
    {
      step: '/contact-details',
      field: 'contact-email'
    },
    {
      step: '/contact-details',
      field: 'contact-telephone'
    },
    {
      step: '/extra-notes',
      field: 'notes'
    }
  ]
};
