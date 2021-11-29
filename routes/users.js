var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users')

/* SIGNUP user */
router.post('/signup', usersCtrl.signup)
/* LOGIN user   */
// router.post('/login', usersCtrl.login)


module.exports = router;