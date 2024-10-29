//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

String.prototype.title = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

addFilter('today', string => {
  const formatter = new Intl.DateTimeFormat('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'})
  return formatter.format(new Date()).replace(', ', ' ')
})

addFilter('currency', string => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP'}).format(string))

addFilter('filterObjectList', (list, key, filters) => list.filter(item => filters.indexOf(item[key]) > -1))

addFilter('flaggedItems', (list, key) => list.some(item => item[key]))

addFilter('countCheckboxItems', function (arr, key, filters) {
    const counts = arr.reduce((acc, obj) => {
      const value = obj[key];
      if (value) {
        acc[value] = (acc[value] || 0) + 1;
      }
      return acc;
    }, {});

    const items = Object.keys(counts).map(value => ({
      value: value,
      text: `${value.title()} (${counts[value]})`,
      checked: filters.indexOf(value) > - 1
    }));

    return items.sort((a, b) => a.text.localeCompare(b.text));
  });

addFilter('removalLinks', filters => filters.map(filter => ({text: filter.title(), href: `/remove-filter?filter=${filter}`})))
