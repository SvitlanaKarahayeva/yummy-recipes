const express = require("express");
const router = express.Router();
const recipesCtrl = require('../controllers/recipes')

// /* GET all recipes */
// router.get('/', recipesCtrl.index)
// /* GET one recipe */
// router.get('/', recipesCtrl.index)
/* CREATE new recipe */
router.post('/create', recipesCtrl.createRecipe)
/* UPDATE recipe */

/* DELETE recipe */

module.exports = router