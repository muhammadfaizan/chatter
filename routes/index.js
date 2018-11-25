var express = require('express');
var router = express.Router();
const debug = require('debug')('chatter:routes:index');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    host: req.headers.host,
    protocol: req.protocol
  });
});

/* GET home page. */
router.get('/chat', function (req, res, next) {
  res.render('chat', {
    host: req.headers.host,
    protocol: req.protocol
  });
});

module.exports = router;
