var express = require('express');
var router = express.Router();

var log = require('./lib/log');

router.get('/', log, function(req, res, next) {
  var data = [{name: 'Oasis', tickets: [{price: '12.00', seat: 'A1'}, {price: '12.00', seat: 'A2'}]}];

  res.json(data);
});

module.exports = router;
