'use strict';

const config = require('../../../config');
const dateFormatter = new Intl.DateTimeFormat(
  config.dateLocales,
  config.dateFormat
);

const STR_NOT_PROVIDED = 'Not provided';

module.exports = {
  sectionHeader: [
    {
      step: '/who-completing',
      field: 'who-is-completing'
    },
    {
      step: '/dependant-or-guardian',
      field: 'dependant-or-guardian'
    },
    {
      step: '/sponsor-type',
      field: 'sponsor-type'
    },
    {
      step: '/who-representing',
      field: 'who-is-representing'
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
      field: 'date-of-application',
      parse: d => d && dateFormatter.format(new Date(d))
    },
    {
      step: '/about-application',
      field: 'cancel-application',
      parse: (value, req) => {
        if (req.sessionModel.get('isSponsor')) {
          return null;
        }
        return value ? value : 'No';
      }
    },
    {
      step: '/main-applicant-passport',
      field: 'is-requesting-passport-to-travel',
      parse: (value, req) => req.sessionModel.get('isSponsor') ? null : value
    },
    {
      step: '/reference-number',
      field: 'rod-reference-number',
      parse: (value, req) => {
        const selectedRefNumbers = Array.isArray(value)
          ? value.map(option => option).join(', ')
          : value;
        req.sessionModel.set('selectedRefNumbers', selectedRefNumbers);
        return Array.isArray(value)
          ? value.map(option => option).join('\n')
          : value;
      }
    },
    {
      step: '/reference-number',
      field: 'rod-case-id'
    },
    {
      step: '/reference-number',
      field: 'rod-ho-reference-number'
    },
    {
      step: '/reference-number',
      field: 'rod-payment-reference-number'
    },
    {
      step: '/reference-number',
      field: 'rod-courier-reference-number'
    },
    {
      step: '/reference-number',
      field: 'rod-unique-application-number'
    },
    {
      field: 'document-type',
      parse: (value, req) => {
        const otherDocTypeValue = req.sessionModel.get('enter-document-type');

        let yourDocuments = value === 'Other' ? otherDocTypeValue : value;

        if (Array.isArray(value)) {
          yourDocuments = value
            .map(option => (option === 'Other' ? otherDocTypeValue : option))
            .join(', ');
        }

        if (!yourDocuments) {
          yourDocuments = STR_NOT_PROVIDED;
        }
        req.sessionModel.set('yourDocuments', yourDocuments);

        return yourDocuments;
      }
    },
    {
      step: '/your-documents',
      field: 'document-description',
      parse: value => {
        return value && value.trim() ? value : STR_NOT_PROVIDED;
      }
    },
    {
      step: '/main-applicant',
      field: 'main-applicant-full-name'
    },
    {
      step: '/main-applicant',
      field: 'main-applicant-dob',
      parse: d => d && dateFormatter.format(new Date(d))
    },
    {
      step: '/main-applicant',
      field: 'main-applicant-nationality'
    },
    {
      step: '/enter-main-applicant-address',
      field: 'main-applicant-address-details',
      parse: (value, req) => {
        const applicantAddress = [
          req.sessionModel.get('main-applicant-address-1'),
          req.sessionModel.get('main-applicant-town-or-city'),
          req.sessionModel.get('main-applicant-postcode')
        ];
        const addressLine2 = req.sessionModel.get('main-applicant-address-2');
        if (addressLine2) {
          applicantAddress.splice(1, 0, addressLine2);
        }
        req.sessionModel.set('applicantAddress', applicantAddress.join(', '));
        return applicantAddress.join(', \n');
      }
    },
    {
      step: '/enter-delivery-address',
      field: 'delivery-address-details',
      parse: (value, req) => {
        if (
          !req.sessionModel.get('steps').includes('/enter-delivery-address')
        ) {
          return null;
        }
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
      step: '/enter-main-applicant-address',
      field: 'delivery-address-details',
      parse: (value, req) => {
        if (req.sessionModel.get('steps').includes('/enter-delivery-address')) {
          return null;
        }

        const mainApplicantAddress = req.sessionModel.get('applicantAddress');
        req.sessionModel.set('deliveryAddress', mainApplicantAddress);
        return mainApplicantAddress?.split(', ')?.join(', \n') ?? null;
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
      field: 'notes',
      parse: value => {
        return value && value.trim() ? value : STR_NOT_PROVIDED;
      }
    }
  ]
};
