/* eslint-disable */
const response = {
  amount: 2000,
  description: 'Test license fee',
  reference: '12345',
  language: 'en',
  metadata: { internal_reference_number: 200, ledger_code: 'AB100' },
  email: 'epp@test.com',
  state: { status: 'created', finished: false },
  payment_id: '6ajio98hnahsu46v2092fdkjdp',
  payment_provider: 'sandbox',
  created_date: '2024-11-18T16:45:15.925Z',
  refund_summary: {
    status: 'pending',
    amount_available: 2000,
    amount_submitted: 0
  },
  settlement_summary: {},
  delayed_capture: false,
  moto: false,
  return_url: 'http://localhost:8080/payment-completed',
  authorisation_mode: 'web',
  _links: {
    self: {
      href: 'https://publicapi.payments.service.gov.uk/v1/payments/6ajio98hnahsu46v2092fdkjdp',
      method: 'GET'
    },
    next_url: {
      href: 'https://card.payments.service.gov.uk/secure/9af8091c-0210-408a-b30e-3a73d963f861',
      method: 'GET'
    },
    next_url_post: {
      type: 'application/x-www-form-urlencoded',
      params: {},
      href: 'https://card.payments.service.gov.uk/secure',
      method: 'POST'
    },
    events: {
      href: 'https://publicapi.payments.service.gov.uk/v1/payments/6ajio98hnahsu46v2092fdkjdp/events',
      method: 'GET'
    },
    refunds: {
      href: 'https://publicapi.payments.service.gov.uk/v1/payments/6ajio98hnahsu46v2092fdkjdp/refunds',
      method: 'GET'
    },
    cancel: {
      href: 'https://publicapi.payments.service.gov.uk/v1/payments/6ajio98hnahsu46v2092fdkjdp/cancel',
      method: 'POST'
    }
  }
};