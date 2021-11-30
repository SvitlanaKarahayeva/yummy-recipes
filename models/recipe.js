const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const recipeSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false
        },
        userEmail: {
            type: String,
            required: true
        },
        categories: {
            type: Array,
            required: false
        }

    }, { timestamps: true }
);

module.exports = mongoose.model('Recipe', recipeSchema);