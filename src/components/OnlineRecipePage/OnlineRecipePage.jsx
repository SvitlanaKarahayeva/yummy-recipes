import React, { useEffect, useState} from 'react';

import { InputGroup, FormControl, Button } from "react-bootstrap";
// import { getORecipes } from '../../services/recipes';
// import OnlineRecipeSearch from '../OnlineRecipeSearch/OnlineRecipeSearch';
// import OnlineRecipeList from '../OnlineRecipeList/OnlineRecipeList';
// import OnlineRecipe from '../OnlineRecipe/OnlineRecipe';
import axios from 'axios';


function OnlineRecipePage() {
    // const [recipes, setRecipes] = useState([])
    // const [search, setSearch] = useState('')
    // const [query, setQuery] = useState('')
   

   const getORecipes=  () => {
        try{
          let response =  axios.get(`https://api.edamam.com/search?q=pizza&app_id=58ced05b&app_key=03891e0322ffd84fed26b74a8914621c`)
          return response
        }
        catch(error) { console.log("Error accured", error) }    
    }
// recipes data is stored data.hits
    useEffect ( () => {
        getORecipes()
        .then( data  => {
            // console.log(data.data.hits)
        })   
    }, [])

    

    return (
        <div>
            <div className="background-pic">
                <div className="online-search-input">
                    <h2>Find your Yummy recipes online</h2>
                    <InputGroup className="mb-3">
                        <Button 
                            id="online-search-btn" 
                            variant="success"  
                            type="submit"   
                        >
                            Search
                        </Button>
    
                        <FormControl
                            type="text"
                            placeholder="Search for Yummy recipies"
                           
                          
                            
                        />
                    </InputGroup>
                </div>
            </div>

                {/* <OnlineRecipeList recipes={recipes}/> */}

        </div>
    )
}

//     const [recipes, setRecipes] = useState([])
//     // fetching data from mealDB API
//     useEffect ( () => {
//         getOnlineRecipes()
//         .then( data  => {
//             setRecipes(data.data.meals)
//         })   
//     }, [])
    
//     return (
//         <div>
//             <OnlineRecipeSearch recipes={recipes}/>
//             <OnlineRecipeList recipes={recipes}/>
//         </div>
//     )
// }

export default OnlineRecipePage;
