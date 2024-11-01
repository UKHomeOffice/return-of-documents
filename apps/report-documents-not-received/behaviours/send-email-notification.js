const sendEmail = require('../../../utils/send-email');

module.exports = class SendEmailConfirmation extends sendEmail {
  
  getUserDetails = req => {
    return {
      applicant_full_name: req.sessionModel.get('dnr-full-name'),
      applicant_dob: dateFormatter.format(
        new Date(getValueOfDefault(req, 'dnr-dob'))
      ),
      applicant_nationality: getValueOfDefault(
        req,
        'dnr-nationality'
      ),
      has_record_number: getYesOrNoStr(req, 'dnr-record-number'),
      record_number:
        getFormattedRecordNumber(getValueOfDefault(req, 'dnr-record-number')) ??
        '',
      has_case_id: getYesOrNoStr(req, 'dnr-case-id'),
      case_id: getValueOfDefault(req, 'dnr-case-id'),
      has_ho_reference_number: getYesOrNoStr(req, 'dnr-ho-reference-number'),
      ho_reference_number: getValueOfDefault(req, 'dnr-ho-reference-number'),
      has_payment_reference_number: getYesOrNoStr(
        req,
        'dnr-payment-reference-number'
      ),
      payment_reference_number: getValueOfDefault(
        req,
        'dnr-payment-reference-number'
      ),
      has_courier_reference_number: getYesOrNoStr(
        req,
        'dnr-courier-reference-number'
      ),
      courier_reference_number: getValueOfDefault(
        req,
        'dnr-courier-reference-number'
      ),
      contact_email: getValueOfDefault(req, 'dnr-email'),
      contact_telephone: getValueOfDefault(req, 'dnr-telephone')
    };
  };
};
