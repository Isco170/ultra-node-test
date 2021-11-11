var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    producao: 'https://ultra-node-test.herokuapp.com/',
    Zip: 'https://drive.google.com/file/d/1FYhF82xg151Iw4TSUPph4bIA2Ejx156r/view?usp=sharing'
  });
});

module.exports = router;
