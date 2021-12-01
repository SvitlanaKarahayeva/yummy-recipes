import React from 'react';
import {Link} from 'react-router-dom'

import './GrandmaRecipe.css'

function GrandmaRecipe(props) {
    return (
        <div className="gmRecipe">
            { props.recipe.image && (
                <img 
                    src={props.recipe.image}
                    alt="Recipe image" 
                /> 
            )}

            <div className="gmRecipeInfo">
                <div className="gmRecipeCategory">
                    {  props.recipe.categories.map( cat => (
                        <span> {cat.name} </span>
                        ))
                    }
                  
                </div>
                <Link to={`recipes/${props.recipe._id}`}>
                    <span className="gmRecipeTitle"> {props.recipe.title} </span>
                </Link>
                <hr />       
            </div>    
            <p className="gmRecipeDescription"> {props.recipe.description} </p>
        </div>
    )
}

export default GrandmaRecipe;
