import './GrandmaRecipeOne.css'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import { Link, useHistory } from 'react-router-dom'
import recipeService from '../../services/recipeService';
import axios from 'axios';



function GrandmaRecipeOne(props) {
    const currentUserEmail = props.currentUser.email
    // console.log(currentUserEmail)
    // gives access to the query params or the complete route string.
    const location = useLocation()

    const id = location.pathname.split('/')[2]
    // console.log(id) 

    const [recipe, setRecipe] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [updatePageMode, setupdatePageMode] = useState(false)

    

    const history = useHistory()

    // console.log(props.currentUser.email)
    // console.log(recipe.userEmail)
    
    useEffect(() => {
        async function fetchOneRecipe(){
            const res  =  await recipeService.getOneGrandmaRecipe(id)
            // console.log (res)
            setRecipe(res.data)
        }
        fetchOneRecipe()
    }, [id])
 
    const handleDelete = async () => {
        try{
            await axios.delete(`/recipes/delete/${id}`, { data: {userEmail: currentUserEmail }})
            history.push('/recipes')
        } catch(err){
            console.log(err)
            
        }  
    }

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
                
                { recipe.userEmail === currentUserEmail &&
                    <div className="gmRecOneIcons">
                        {/* Update */}
                        <i className="gmRecOneEdit fas fa-user-edit"
                            
                        />
                        {/* Delete */}
                        <i className="gmRecOneDelete fas fa-trash-alt"
                            onClick={handleDelete} />
                      
                    </div>
                }
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
