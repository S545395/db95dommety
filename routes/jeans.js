var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jeans', { title: 'Search Results for jeans' });
});

module.exports = router;
