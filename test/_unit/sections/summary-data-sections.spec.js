const sections = require('../../../apps/rod/sections/summary-data-sections.js');
const pages = require('../../../apps/rod/translations/src/en/pages.json');

describe('Apply Summary Data Sections for ROD', () => {
  describe.only('Sections and Pages', () => {
    it('should have a section header in pages and sections', () => {
      const sectionHeaderKey = Object.keys(sections);
      const pagesSectionsHeaderKeys = Object.keys(pages);
      pagesSectionsHeaderKeys.should.include(sectionHeaderKey.toString());
    });
  });
});
