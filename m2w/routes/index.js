var express = require('express');
var router = express.Router();

const AuthController = require('../controllers/authController');
router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
