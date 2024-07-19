var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

router.post('/', function(res, req, next) {
    res.post('method post');
})

router.put('/', function(res, req, next) {
    res.put('method put');
})

router.delete('/', function(res, req, next) {
    res.delete('method delete');
})
  
  module.exports = router;
  