import React from 'react';
import OnlineRecipe from '../OnlineRecipe/OnlineRecipe';
import './OnlineRecipeList.css'

function OnlineRecipeList(props) {
    return (
        <div className="Recipe-list-container">
            { props.recipes.map((recipe, idx) => (
                <div key={recipe.idMeal}>
                    <OnlineRecipe recipe={recipe}/>
                </div>

            )) 
            }
        </div>
    )
}

export default OnlineRecipeList;
