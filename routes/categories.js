const express = require("express");
const router = express.Router();
const categoriesCtrl = require('../controllers/categories');

/* CREATE new category */
router.get('/', categoriesCtrl.index);

/* CREATE new category */
router.post('/create', categoriesCtrl.createCategory);

module.exports = router;