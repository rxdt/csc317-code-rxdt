var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSC 317 App', name:"Roxana del Toro" });
});

router.get('/login', function (req, res, next) {
  res.render('login', {title: 'Login', css: 'login.css'});
})

router.get('/register', function (req, res, next) {
  res.render('register', {title: 'Register'});
})

router.get('/post', function (req, res, next) {
  res.render('postvideo', {title: 'Post video'});
})

router.get('/viewpost', function (req, res, next) {
  res.render('viewpost', {title: 'View post'});
})

module.exports = router;