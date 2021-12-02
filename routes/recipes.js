const express = require("express");
const router = express.Router();
const recipesCtrl = require('../controllers/recipes')

/* GET all recipes */
router.get('/', recipesCtrl.index)

/* GET one recipe */
router.get('/:id', recipesCtrl.getOneRecipe)

/* CREATE new recipe */
router.post('/create', recipesCtrl.createRecipe)

/* UPDATE recipe */
router.put('/update/:id', recipesCtrl.updateRecipe)

/* DELETE recipe */
router.delete('/delete/:id', recipesCtrl.deleteRecipe)


module.exports = router