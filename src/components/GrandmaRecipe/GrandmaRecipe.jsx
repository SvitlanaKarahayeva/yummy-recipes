import React from 'react';
import {Link} from 'react-router-dom'

import './GrandmaRecipe.css'

function GrandmaRecipe(props) {

    return (
        <div className="gmRecipe">
            { props.recipe.image && (
                <img 
                    src={props.recipe.image} 
                    alt=""
                /> 
            )
            }

            <div className="gmRecipeInfo">
                <div className="gmRecipeCategory">
                    {  props.recipe.categories.map( (cat, idx) => (
                        <span key={idx}> {cat.name} </span>
                        ))
                    }
                  
                </div>
                <Link to={`recipes/${props.recipe._id}`} className="link">
                    <span className="gmRecipeTitle link"> {props.recipe.title} </span>
                </Link>

                <div className="gmRecOneEmail">
                    <span>Created by:&nbsp;&nbsp; 
                        <Link to={`/recipes?userEmail=${props.recipe.userEmail}`} className="link">
                            <i className="fas fa-envelope"></i> <b>{props.recipe.userEmail}</b>
                        </Link>
                    </span>
                </div>   
                <hr />       
            </div>    
            <p className="gmRecipeDescription"> {props.recipe.description} </p>
        </div>
    )
}

export default GrandmaRecipe;
