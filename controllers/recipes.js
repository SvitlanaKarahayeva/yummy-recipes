const Recipe = require('../models/recipe')
const User = require('../models/user')


/* GET all recipe  */
// all posts return if queries are not matched/specified
// 2 query searches: by email and by category
async function index(req, res){
    const userEmail = req.query.userEmail
    const category = req.query.category
    try{
        // finding by userEmail and category name first
        let recipes;
        if(userEmail){
            recipes = await Recipe.find({userEmail: userEmail})
        } else if(category){
             recipes = await Recipe.find({categories: {
                //  checking if chosen category  matches any from exhisting categories
                 $in:[category]
             }})
            //  if no matches return all posts
        } else{
            recipes = await Recipe.find()
        }
        res.status(200).json(recipes)
    }catch(err){

    }
}

/* GET One recipe */
async function getOneRecipe(req, res){
    try{
        const recipe = await Recipe.findById(req.params.id)
        res.status(200).json(recipe)
    }catch(err){
        res.status(401).json(err)
    }
}

/* CREATE recipe */
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
    index,
    getOneRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe,
}