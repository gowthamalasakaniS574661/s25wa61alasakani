var express = require('express');
var router = express.Router();

var lastDigit = 'S574661'.slice(-1);

var mathFunctions = {
  1: Math.abs,
  5: Math.atan2,
  6: Math.atanh,
  7: Math.cbrt,
  8: Math.hypot,
  9: Math.ceil,
  0: Math.clz32,
};

var defaultFunction = Math.abs;

function generateRandomNumber() {
  return Math.random() * 100;
}

router.get('/', function(req, res, next) {
  var x = req.query.x ? parseFloat(req.query.x) : generateRandomNumber();
  var mathFunction = mathFunctions[lastDigit] || defaultFunction;
  var result = mathFunction(x);
  res.send(`${mathFunction.name} applied to ${x} is ${result}`);
});

module.exports = router;
