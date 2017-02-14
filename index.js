function floof(value, type = 'byte') {
  return types[type](value);
}

var types = {};

var byte = types.byte = function(value) {
  var units = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  var negative = value < 0;
  value = negative ? -value : value;

  if (value < 1) return (negative ? '-' : '') + value + ' B';

  var exponent = Math.min(Math.floor(Math.log(value) / Math.log(1000)), units.length - 1);
  var num = Number((value / Math.pow(1000, exponent)).toPrecision(3));
  var unit = units[exponent];

  return (negative ? '-' : '') + num + ' ' + unit;
};

module.exports = floof;
module.exports.byte = byte;

module.exports.types = types;
