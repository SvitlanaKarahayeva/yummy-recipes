const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const recipeSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique
        },
        description: {
            type:string,
            required: true
        },
        image: {
            type: String,
            required: false
        },
        username: {
            type: String,
            required: true
        },
        categories: {
            type: Array,
            required: false
        }

    }, { timestamps: true }
)

module.exports = mongoose.model('Recipe', recipeSchema);