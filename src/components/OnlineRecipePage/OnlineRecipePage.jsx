// import React, { useEffect, useState} from 'react';

// import { InputGroup, FormControl, Button } from "react-bootstrap";
// import { getORecipes } from '../../services/recipes';
import OnlineRecipeSearch from '../OnlineRecipeSearch/OnlineRecipeSearch';
// import OnlineRecipeList from '../OnlineRecipeList/OnlineRecipeList';
// import OnlineRecipe from '../OnlineRecipe/OnlineRecipe';
// import axios from 'axios';


function OnlineRecipePage() {
    // const [recipes, setRecipes] = useState([])
    // const [search, setSearch] = useState('')
    // const [query, setQuery] = useState('')
   

    // const [recipes, setRecipes] = useState([])
    // // fetching data from mealDB API
    // useEffect ( () => {
    //     getOnlineRecipes()
    //     .then( data  => {
    //         setRecipes(data.data.meals)
    //     })   
    // }, [])
    
    return (
        <div>
             <OnlineRecipeSearch/>
            {/* <OnlineRecipeList />  */}
        </div>
    )
}

export default OnlineRecipePage;
