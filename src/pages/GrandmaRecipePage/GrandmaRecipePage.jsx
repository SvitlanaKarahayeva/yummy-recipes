import React, { useEffect, useState } from 'react';
import GrandmaRecipes from '../../components/GrandmaRecipes/GrandmaRecipes';
import Categories from '../../components/Categories/Categories'
import recipeService from '../../services/recipeService';
import { useLocation } from 'react-router';
import './GrandmaRecipePage.css'


function GrandmaRecipePage() {
    const [recipes, setRecipes] = useState([])
    
    // query
    const {search} = useLocation()
    // search is a property from location, gives the query string info, in this case: userEmail=svetlana@gmail.com what I put after "?" sign"
   
    
    useEffect(() => {
        async function fetchData(){
            let res =  await recipeService.getGrandmaRecipes(search)
            // console.log(res)
            setRecipes(res.data)
        }
        fetchData()
    }, [search])

    return (
        <div className="gm-recipes-page">
            <GrandmaRecipes recipes={recipes}/> 
            <Categories />     
        </div>
    )
}

export default GrandmaRecipePage;
