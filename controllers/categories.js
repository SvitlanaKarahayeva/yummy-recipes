const { request } = require('express')
const Category = require('../models/category')

/* GET all categories */
async function index(req, res){
    try{
        const categories = await Category.find()
        res.status(200).json(categories)
    }catch(err){
        res.status(400).json(err)
    }
};

/* CREATE new category */
async function createCategory(req, res){
    const newCategory = new Category(req.body)
    try{
        const savedCategory = await newCategory.save()
        res.status(200).json(savedCategory)
    }catch(err){
        res.status(400).json(err)
    }
};

module.exports = {
    index,
    createCategory,
};