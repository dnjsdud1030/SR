var express = require('express');
var createError = require('http-errors');
var router = express.Router();

/* GET home page. */
router.get('/hello', function(req, res, next) {
  res.send({ title:'hello', msg:'hello' });
});

router.use('/user', require('./user'))


router.all('*', function(req, res, next) {
  next(createError(404, '페이지가 존재하지 않습니다.'));
});

module.exports = router;
