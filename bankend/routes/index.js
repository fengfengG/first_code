var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')
const bodyParserMidllware = bodyParser.urlencoded({ extended: false })

const { Login } = require('../controller/user')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/user/login',bodyParserMidllware,Login)
module.exports = router;
