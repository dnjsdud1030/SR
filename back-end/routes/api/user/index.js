var express = require('express');
var createError = require('http-errors');
var router = express.Router();

const us = [
  {
    name: '홍길동',
    age: 14
  },
  {
    name: '이순신',
    age: 55
  },
  {
    name: '세종대왕',
    age: 66
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('GET_query = ', req.query)
  console.log('GET_body = ',req.body)
  res.send({ users : us })
});

/* 밀어 넣는다. */
router.post('/', function(req, res, next) {
  console.log('POST_query = ', req.query)
  console.log('POST_body = ',req.body)
  res.send({ success: true, msg:'POST 성공' })
});

router.put('/', function(req, res, next) {
  console.log('PUT_query = ', req.query)
  console.log('PUT_body = ',req.body)
  res.send({ success: true, msg:'PUT 성공' })
});

router.delete('/', function(req, res, next) {
  console.log('DEL_query = ', req.query)
  console.log('DEL_body = ',req.body)
  res.send({success: true, msg:'DELETE 성공' })
});



router.all('*', function(req, res, next) {
  next(createError(404, '페이지가 존재하지 않습니다.....'));
});

module.exports = router;
