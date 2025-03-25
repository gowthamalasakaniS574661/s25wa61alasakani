var express = require('express');
var router = express.Router();

let ratio = 0.75;  // Define ratio
let acc = 1000;    // Define acc

/* GET users listing. */
router.get('/', function(req, res, next) {
  acc = acc * ratio;  // Update acc value
  res.send(`Value is: ${acc}`);  // Send the updated value
});

module.exports = router;

