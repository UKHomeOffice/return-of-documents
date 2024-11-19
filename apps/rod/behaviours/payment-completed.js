/* eslint-disable */
module.exports = superclass =>
  class extends superclass {
    async getValues(req, res, next) {
      const paymentId = req.sessionModel.get('payment-id');

      // const paymentId = 'thdbg5k6o8686lud2ptc19ifgm'; // valid paymentid

      async function checkPayment() {
        const resp = await fetch(
          `https://publicapi.payments.service.gov.uk/v1/payments/${paymentId}`,
          {
            headers: {
              Authorization:
                'Bearer api_test_ma5c52atmcgvpva2oideg4kkdjqrghp9hvbsv12smi2qtebg5cpos3l65f'
            }
          }
        );
        return resp;
      }
      try {
        const resp = await checkPayment();
        const data = await resp.json();
        console.log(data);
      } catch {
        return next(Error(`Error fetching payment status`));
      }

      return super.getValues(req, res, next);
    }
  };
