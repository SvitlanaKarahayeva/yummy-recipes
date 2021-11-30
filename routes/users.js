var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users')

/* REGISTER user */
router.post('/register', usersCtrl.register)

/* LOGIN user   */
router.post('/login', usersCtrl.login)

module.exports = router;