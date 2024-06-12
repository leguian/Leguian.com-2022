const paints = require('./paints.list.json');

module.exports = function() {
  return paints.sort((a, b) => b.year - a.year);
};
