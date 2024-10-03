'use strict';

require('hof/frontend/themes/gov-uk/client-js');
const govuk = require('govuk-frontend');

const accessibleAutocomplete = require('accessible-autocomplete');

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.typeahead').forEach(function applyTypeahead(element) {
    accessibleAutocomplete.enhanceSelectElement({
      defaultValue: '',
      selectElement: element
    });
  });
});

govuk.initAll();
