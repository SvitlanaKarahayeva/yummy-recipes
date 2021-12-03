import './GrandmaRecipeOne.css'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import recipeService from '../../services/recipeService';



function GrandmaRecipeOne(props) {

    // gives access to the query params or the complete route string.
    const location = useLocation()
    // console.log(location)
    const id = location.pathname.split('/')[2]
    // console.log(id) 

    const [recipe, setRecipe] = useState([])
    const [user, setUser] = useState(props.currentUser)
    

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
                { recipe.categories && recipe.categories.map((cat, idx) => 
                    
                        <span key={idx}>
                            <Link to={`/recipes?category=${cat}`} className="link">
                                {cat}
                            </Link>
                        </span>
                    
                )}
            
                </div>


                <div className="gmRecOneIcons">
                    <i className="gmRecOneEdit fas fa-user-edit"></i>
                    <i className="gmRecOneDelete fas fa-trash-alt"></i>

                </div>
                <span className="gmRecOneTitle">{recipe.title}</span>
                
                
                <div className="gmRecOneEmail">
                    <span>Author: 
                        <Link to={`/recipes?userEmail=${recipe.userEmail}`} className="link">
                            <i className="fas fa-envelope"></i> <b>{recipe.userEmail}</b>
                        </Link>
                    </span>
                </div>    
            </div>
            <hr/>
            
           
            <div className="gmRecOneDescription">  
                <p>{recipe.description}</p>
            </div>  
        </div>
    )
}

export default GrandmaRecipeOne
