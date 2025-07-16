var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSC 317 App', name:"Roxana del Toro" });
});

module.exports = router;

var express = require('express')
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('Hello World!');
})

router.get('/login', function (req, res, next) {
  res.render('index', {title: 'CSC 317 App'});
})

router.get('/register', function (req, res, next) {
  res.render('register', {title: 'Register'});
})

router.get('/post', function (req, res, next) {
  res.render('post', {title: 'Post video'});
})

router.get('/viewpost', function (req, res, next) {
  res.render('vewe', {title: 'View post'});
})