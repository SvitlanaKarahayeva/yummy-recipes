const Recipe = require('../models/recipe')
const User = require('../models/user')
const { post } = require('../routes/recipes')

async function createRecipe(req, res){
    const newRecipe = new Recipe(req.body)
    try{
        const savedRecipe = await newRecipe.save()
        res.status(200).json(savedRecipe)
    }catch(err){
        res.status(401).json(err)
    }
}

/* UPDATE recipe */
// only the owner of the recipe is allowed to do it
async function updateRecipe(req, res){
    try{
         const recipe = await Recipe.findById(req.params.id)
         //  validating the user
         if(recipe.userEmail === req.body.userEmail){
            
            try{
                const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body)
                res.status(200).json(updatedRecipe)
            }catch(err){
                res.status(401).json(err)
            }
            
         }else{
             res.status(401).json("You can update only your recipe")
         }
         
    }catch(err){
        res.status(401).json(err)
    }
}

/* DELETE recipe */
// only the owner of the recipe is allowed to do it
async function deleteRecipe(req, res){
    try{
         const recipe = await Recipe.findById(req.params.id)
         //  validating the user
         if(recipe.userEmail === req.body.userEmail){
            
            try{
                const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id)
                res.status(200).json("Recipe has been deleted")
            }catch(err){
                res.status(401).json(err)
            }
            
         }else{
             res.status(401).json("You can delete only your recipe")
         }
         
    }catch(err){
        res.status(401).json(err)
    }
}


module.exports = {
    createRecipe,
    updateRecipe,
    deleteRecipe
}