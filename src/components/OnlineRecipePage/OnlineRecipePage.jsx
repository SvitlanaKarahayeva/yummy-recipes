import React, { useEffect, useState} from 'react';

import { getOnlineRecipes } from '../../services/recipes';
import OnlineRecipeSearch from '../OnlineRecipeSearch/OnlineRecipeSearch';
import OnlineRecipeList from '../OnlineRecipeList/OnlineRecipeList';

function OnlineRecipePage() {

    const [recipes, setRecipes] = useState([])
    // fetching data from mealDB API
    useEffect ( () => {
        getOnlineRecipes()
        .then( data  => {
            setRecipes(data.data.meals)
        })   
    }, [])
    
    return (
        <div>
            <OnlineRecipeSearch />
            <OnlineRecipeList recipes={recipes}/>
        </div>
    )
}

export default OnlineRecipePage;
