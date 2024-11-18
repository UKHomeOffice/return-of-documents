/* eslint-disable */
const response = {
  amount: 2000,
  description: 'Test license fee',
  reference: '12345',
  language: 'en',
  metadata: { internal_reference_number: 200, ledger_code: 'AB100' },
  email: 'epp@test.com',
  state: { status: 'success', finished: true },
  payment_id: 'thdbg5k6o8686lud2ptc19ifgm',
  payment_provider: 'sandbox',
  created_date: '2024-11-18T14:29:46.196Z',
  refund_summary: {
    status: 'available',
    amount_available: 2000,
    amount_submitted: 0
  },
  settlement_summary: {
    capture_submit_time: '2024-11-18T14:30:36.367Z',
    captured_date: '2024-11-18'
  },
  card_details: {
    last_digits_card_number: '5556',
    first_digits_card_number: '400005',
    cardholder_name: 'Test',
    expiry_date: '10/28',
    billing_address: {
      line1: 'Address 1',
      line2: 'Line 2',
      postcode: 'Bt1 1aa',
      city: 'London',
      country: 'GB'
    },
    card_brand: 'Visa',
    card_type: 'debit',
    wallet_type: null
  },
  delayed_capture: false,
  moto: false,
  provider_id: 'ff978b2d-eddc-48f4-9299-666dcfad32d9',
  return_url: 'http://localhost:8080/payment-completed',
  authorisation_mode: 'web',
  _links: {
    self: {
      href: 'https://publicapi.payments.service.gov.uk/v1/payments/thdbg5k6o8686lud2ptc19ifgm',
      method: 'GET'
    },
    events: {
      href: 'https://publicapi.payments.service.gov.uk/v1/payments/thdbg5k6o8686lud2ptc19ifgm/events',
      method: 'GET'
    },
    refunds: {
      href: 'https://publicapi.payments.service.gov.uk/v1/payments/thdbg5k6o8686lud2ptc19ifgm/refunds',
      method: 'GET'
    }
  },
  card_brand: 'Visa'
};