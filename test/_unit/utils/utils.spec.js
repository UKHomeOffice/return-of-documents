const utils = require('../../../utils');
const translation = require('../../../apps/rod/translations/src/en/fields.json');

describe('ROD utils tests', () => {
  let req;

  beforeEach(() => {
    req = reqres.req();
  });

  afterEach(() => {
    req.sessionModel.unset('ut_value');
  });

  it('.removeWhiteSpace - should remove the whitespace', () => {
    expect(utils.removeWhiteSpace('Hello World')).to.equal('HelloWorld');
    expect(utils.removeWhiteSpace('1 2 3 4 5 ')).to.equal('12345');
  });

  it('.removeWhiteSpace - should return undefined when value is falsy', () => {
    expect(utils.removeWhiteSpace(null)).to.equal(undefined);
  });

  it('.validInternationalPhoneNumber - should return true for a valid phone number', () => {
    expect(utils.validInternationalPhoneNumber('0 7 7 7 7 7 7 7 777')).to.equal(
      true
    );
  });

  it('.validInternationalPhoneNumber - should return false for an invalid phone number', () => {
    expect(utils.validInternationalPhoneNumber('01253256')).to.equal(false);
  });

  it('.validInternationalPhoneNumber - should return false for invalid input', () => {
    expect(utils.validInternationalPhoneNumber('XXXABCD')).to.equal(false);
  });

  it('.getFormattedRecordNumber - should return null when value is falsy', () => {
    expect(utils.getFormattedRecordNumber(null)).to.equal(null);
  });

  it('.getFormattedRecordNumber - should add ROD prefix when input string does not start with ROD', () => {
    expect(utils.getFormattedRecordNumber('123456789')).to.equal(
      'ROD123456789'
    );
  });

  it('.getFormattedRecordNumber - should not add ROD prefix when input string starts with ROD', () => {
    expect(utils.getFormattedRecordNumber('ROD123456789')).to.equal(
      'ROD123456789'
    );
  });

  it('.getLabel - returns correct label based on the field key - array', () => {
    expect(
      utils.getLabel('who-is-completing', ['who-is-rep'], translation)
    ).to.equal('A legal representative');
  });

  it('.getLabel - returns correct label based on the field key - non array', () => {
    expect(
      utils.getLabel('who-is-completing', 'applicant', translation)
    ).to.equal('The main applicant');
  });

  it('.getValueOfDefault - should return default value when input is falsy or does not exist', () => {
    expect(utils.getValueOfDefault(req, 'invalid')).to.equal('');
  });

  it('.getValueOfDefault - should return default value when input is falsy or does not exist', () => {
    req.sessionModel.set('ut_value', 'test_value');
    expect(utils.getValueOfDefault(req, 'ut_value')).to.equal('test_value');
  });

  it('.getYesOrNoStr - should return "no" when input is falsy or does not exist', () => {
    expect(utils.getYesOrNoStr(req, 'invalid')).to.equal('no');
  });

  it('.getYesOrNoStr - should return "yes" when input exist in session', () => {
    req.sessionModel.set('ut_value', 'test_value');
    expect(utils.getYesOrNoStr(req, 'ut_value')).to.equal('yes');
  });
});
