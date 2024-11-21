const validators = require('hof/controller/validation/validators');

const removeWhiteSpace = value => value?.replace(/\s+/g, '');

const validInternationalPhoneNumber = value => {
  const phoneNumberWithoutSpace = value.replace(/\s+/g, '').trim();
  const isValidPhoneNumber = validators.regex(
    phoneNumberWithoutSpace,
    /^\(?\+?[\d()-]{8,16}$/
  );
  return isValidPhoneNumber && validators.internationalPhoneNumber(value);
};

const getFormattedRecordNumber = rodNumber => {
  if (!rodNumber) return null;
  const valueWithoutSpace = removeWhiteSpace(rodNumber);
  const containsRod = valueWithoutSpace.match(/^r[o0]d/i);
  if (containsRod) {
    return 'ROD' + valueWithoutSpace.slice(3);
  }
  return 'ROD' + valueWithoutSpace;
};

const getLabel = (fieldKey, fieldValue, translation) => {
  if (Array.isArray(fieldValue)) {
    return fieldValue
      .map(option => translation[fieldKey].options[option].label)
      .join(', ');
  }
  return translation[fieldKey]?.options[fieldValue]?.label;
};

const getValueOfDefault = (req, field) => {
  return req.sessionModel.get(field) ?? '';
};

const getYesOrNoStr = (req, field) => {
  return req.sessionModel.get(field) ? 'yes' : 'no';
};

module.exports = {
  removeWhiteSpace,
  validInternationalPhoneNumber,
  getFormattedRecordNumber,
  getLabel,
  getValueOfDefault,
  getYesOrNoStr
};
