const Recipe = require('../models/recipe')
const User = require('../models/user')

async function createRecipe(req, res){
    const newRecipe = new Recipe(req.body)
    try{
        const savedRecipe = await newRecipe.save()
        res.status(200).json(savedRecipe)
    }catch(err){
        res.status(401).json(err)
    }
}

module.exports = {
    createRecipe,
}