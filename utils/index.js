const removeWhiteSpace = value => value?.replace(/\s+/g, '');

const getFormattedRecordNumber = rodNumber => {
  if (!rodNumber) return null;
  const valueWithoutSpace = removeWhiteSpace(rodNumber);
  const containsRod = valueWithoutSpace.match(/^r[o0]d/i);
  if (containsRod) {
    return 'ROD' + valueWithoutSpace.slice(3);
  }
  return 'ROD' + valueWithoutSpace;
};

module.exports = { removeWhiteSpace, getFormattedRecordNumber };
