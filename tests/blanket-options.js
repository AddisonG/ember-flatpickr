/* globals blanket, module */

const options = {
  modulePrefix: 'ember-flatpickr',
  filter: '//.*ember-flatpickr/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    reporters: ['lcov'],
    autostart: true,
    lcovOptions: {
      outputFile: 'lcov.dat',
      renamer: function (moduleName) {
        const expression = /^ember-flatpickr/;
        return moduleName.replace(expression, 'addon') + '.js';
      }
    }
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
