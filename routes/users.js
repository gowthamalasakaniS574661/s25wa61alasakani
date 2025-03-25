var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  let ratio = 0.75;
  let acc = Math.floor(Math.random() * 1000); // Random starting value for acc
  acc *= ratio;
  res.send(`Value is: ${acc}`);
});

module.exports = router;
