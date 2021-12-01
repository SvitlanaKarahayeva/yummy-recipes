import React, { useEffect, useState } from 'react';
import GrandmaRecipes from '../../components/GrandmaRecipes/GrandmaRecipes';
import Categories from '../../components/Categories/Categories'
import recipeService from '../../services/recipeService';

import './GrandmaRecipePage.css'

function GrandmaRecipePage() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        async function fetchData(){
            let res =  await recipeService.getGrandmaRecipes()
            // console.log(res)
            setRecipes(res.data)
        }
        fetchData()
    }, [])

    return (
        <div className="gm-recipes-page">
            <GrandmaRecipes recipes={recipes}/> 
            <Categories />     
        </div>
    )
}

export default GrandmaRecipePage;
