import React from 'react';
import OnlineRecipe from '../OnlineRecipe/OnlineRecipe';
import './OnlineRecipeList.css'

function OnlineRecipeList(props) {
    return (
        <div className="Recipe-list-container">
            { props.recipes.map((recipe) => (
           
                    <OnlineRecipe 
                        key={recipe.recipe.label}
                        recipe={recipe.recipe} />

            )) 
            }
        </div>
    )
}

export default OnlineRecipeList;
