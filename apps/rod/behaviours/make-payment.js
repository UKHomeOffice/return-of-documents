/* eslint-disable */
const uuid = require('uuid').v4;
module.exports = superclass =>
  class extends superclass {
    async saveValues(req, res, next) {
      async function initiatePayment() {
        const resp = await fetch(
          'https://publicapi.payments.service.gov.uk/v1/payments',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization:
                'Bearer api_test_ma5c52atmcgvpva2oideg4kkdjqrghp9hvbsv12smi2qtebg5cpos3l65f'
            },
            body: JSON.stringify({
              amount: 2000,
              reference: '12345',
              description: 'Test license fee',
              return_url:
                'https://rod-epp-2-poc-worldpay-integration.internal.branch.sas-notprod.homeoffice.gov.uk?id=' +
                uuid(),
              delayed_capture: false,
              metadata: {
                ledger_code: 'AB100',
                internal_reference_number: 200
              },
              email: 'epp@test.com',
              language: 'en'
            })
          }
        );

        return resp;
      }

      try {
        const resp = await initiatePayment();
        const data = await resp.json();
        console.log(data);
        req.sessionModel.set('payment-id', data.payment_id);
        return res.redirect(data._links.next_url.href);
      } catch (error) {
        return next(Error('Error fetching the payment URL'));
      }

      // return super.saveValues(req, res, next); // TODO: DO we still need this?
    }
  };
