export const ConstantsLib = {
  // Main applicant details
  FULL_NAME: 'Jack Jones',
  DOB_DAY: '01',
  DOB_MONTH: '01',
  DOB_YEAR: '1990',
  NATIONALITY: 'Italy',

  // About the application
  DATE_APPLIED_DAY: '01',
  DATE_APPLIED_MONTH: '01',
  DATE_APPLIED_YEAR: '2020',

  // Address and contact details
  ADDRESS_LINE_1: '2 Ruskin square',
  ADDRESS_LINE_2: 'East Croydon',
  TOWN_OR_CITY: 'East Croydon',
  MAIN_APPLICANT_POSTCODE: 'CR0 9XJ',
  DELIVERY_POSTCODE: 'CR09XF',
  SAS_HOF_EMAIL: requiredEnv('SAS_HOF_EMAIL'),
  TELEPHONE: '07130638416',

  // Free text
  LEGAL_FIRM_NAME: 'British legal firm',
  OTHER_DOCUMENT_TYPE: '123456',
  DOCUMENT_DESCRIPTION: "Document type as mentioned above and owner's name, nationality and date of birth are also same as above.",
  NOTES_ABOUT_YOUR_REQUEST: 'Details of my request',

  // Confirmation checkboxes
  LETTER_OF_AUTHORITY_CONFIRMATION: 'I confirm I have sent the Home Office a signed letter of authority',
  DECLARATION_CONFIRMATION: 'I understand and agree to this declaration',

  // Yes / No
  YES: 'Yes',
  NO: 'No',

  // Who is completing the form
  THE_MAIN_APPLICANT: 'The main applicant',
  A_LEGAL_REPRESENTATIVE: 'A legal representative',
  A_SPONSOR: 'A sponsor',
  A_DEPENDANT_OR_GUARDIAN: 'A dependant or guardian of a dependant',
  A_BRITISH_SPONSOR: 'A British sponsor',
  A_DEPENDANT_AGED_18_OR_OVER: 'A dependant aged 18 or over',
  A_PARENT_OR_GUARDIAN_UNDER_18: 'A parent or guardian of a dependant who is under 18',

  // What is the application for
  A_VISA: 'A visa',
  BRITISH_CITIZENSHIP: 'British citizenship',
  FURTHER_LEAVE_TO_REMAIN: 'Further leave to remain',
  NO_TIME_LIMIT: 'No time limit or replacement settlement biometric residence permit',
  SETTLED_OR_PRE_SETTLED: 'Settled or pre-settled status under the EU Settlement Scheme',
  SETTLEMENT: 'Settlement',
  TRANSFER_OF_CONDITIONS: 'Transfer of conditions or limited leave replacement biometric residence permit',

  // Visa type / further leave type
  BRITISH_NATIONAL_OVERSEAS_VISA: 'British national (overseas) visa',
  TEMPORARY_WORK_VISA: 'Temporary work visa',
  FLR_FP: 'FLR (FP)',

  // Your documents
  PASSPORT: 'Passport',
  MARRIAGE_CERTIFICATE: 'Marriage certificate',
  OTHER: 'Other',

  // Reference number options
  RECORD_NUMBER: 'Record number',
  CASE_ID: 'Case ID',
  HOME_OFFICE_REFERENCE_NUMBER: 'Home Office reference number',
  PAYMENT_REFERENCE_NUMBER: 'Payment reference number',
  COURIER_REFERENCE_NUMBER: 'Courier reference number',
  UNIQUE_APPLICATION_NUMBER: 'Unique Application Number (UAN)',

  // Reference number values - main form
  MF_CASE_ID_VALUE: '12345678',
  MF_HO_REFERENCE_NUMBER_VALUE: 'H1234567',
  MF_PAYMENT_REFERENCE_NUMBER_VALUE: '076876',
  MF_COURIER_REFERENCE_NUMBER_VALUE: 'Cr034354',

  // Reference number values - documents not received and cancel request
  RECORD_NUMBER_VALUE: 'ROD123456789',
  CASE_ID_VALUE: '12345678',
  HO_REFERENCE_NUMBER_VALUE: 'H1234567',
  PAYMENT_REFERENCE_NUMBER_VALUE: '12345678',
  COURIER_REFERENCE_NUMBER_VALUE: 'RM1234567890',
  UNIQUE_APPLICATION_NUMBER_VALUE: '1111-2222-3333-4444',
} as const;


function requiredEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`${name} is not configured`);
    }
    return value;
}
