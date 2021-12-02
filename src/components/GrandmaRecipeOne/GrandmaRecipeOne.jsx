import './GrandmaRecipeOne.css'


import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import recipeService from '../../services/recipeService';
import axios from 'axios'

function GrandmaRecipeOne() {

    // gives access to the query params or the complete route string.
    const location = useLocation()
    // console.log(location)
    const id = location.pathname.split('/')[2]
    // console.log(id) 

    const [recipe, setRecipe] = useState([])
    

    useEffect(() => {
        async function fetchOneRecipe(){
            const res  =  await recipeService.getOneGrandmaRecipe(id)
            console.log (res)
            setRecipe(res.data)
        }
        fetchOneRecipe()
    }, [id])
 
    return (
        <div className="gmRecOne">

            { recipe.image && 
                <img 
                    src={recipe.image}
                    alt="" 
                />  
            }
            <div className="gmRecOneInfo">
                <div className="gmRecOneCategory">
                    <span>Lunch</span>
                    <span>Breakfast</span>
                </div>
            <div className="gmRecOneIcons">
                <i className="gmRecOneEdit fas fa-user-edit"></i>
                <i className="gmRecOneDelete fas fa-trash-alt"></i>

            </div>
                <span className="gmRecOneTitle">{recipe.title}</span>
                <hr />       
            </div>
            <div className="gmRecOneDescription">  
                <p>{recipe.description}</p>
            </div>  
        </div>
    )
}

export default GrandmaRecipeOne
