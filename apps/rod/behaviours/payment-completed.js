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
                'Bearer api_test_t26g0s45s1vkmf0h5sqhpic8v3dj7lttt4kt47f8257fvqgchnbln2cvji'
            }
          }
        );
        return resp;
      }
      try {
        const resp = await checkPayment();
        const data = await resp.json();
        console.log(data)
      } catch {
        return next(Error(`Error fetching payment status`));
      }

      return super.getValues(req, res, next);
    }
  };
