const express = require("express");
const router = express.Router();
const recipesCtrl = require('../controllers/recipes')

/* show all recipes */
router.get('/', recipesCtrl.index)

module.exports = router