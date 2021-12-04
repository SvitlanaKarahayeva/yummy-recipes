import './GrandmaRecipeOne.css'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import { Link, useHistory } from 'react-router-dom'
import recipeService from '../../services/recipeService';
import axios from 'axios';

function GrandmaRecipeOne(props) {
    const currentUserEmail = props.currentUser.email
    // console.log(currentUserEmail)

    // ---useLocation:gives access to the query params or the complete route string.--- */}
    const location = useLocation()
    // pathname is one of the keys with value of id number 
    const id = location.pathname.split('/')[2]
    // console.log(id) 

    const [recipe, setRecipe] = useState([])
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [categories, setCategories] = useState('')

    const [updatePageMode, setupdatePageMode] = useState(false)

    const history = useHistory()
    
  //---GET one recipe--- 
    useEffect(() => {
        async function fetchOneRecipe(){
            const res  =  await recipeService.getOneGrandmaRecipe(id)
            // console.log (res)
            setRecipe(res.data)

            // for update form
            setTitle(res.data.title)
            setImage(res.data.image)
            setDescription(res.data.description)
            setCategories(res.data.categories)
            
        }
        fetchOneRecipe()
    }, [id])
 
    // ---DELETE function with axios req--- 
    const handleDelete = async () => {
        try{
            await axios.delete(`/recipes/delete/${id}`, { data: {userEmail: currentUserEmail }})
            history.push('/recipes')
        } catch(err){
            console.log(err)   
        }  
    }

    const handleUpdate = async () => {
        try{
            await axios.put(`/recipes/update/${id}`, { 
                userEmail: currentUserEmail,
                title,
                image,
                description,
                categories   
            })
            history.push(`/recipes/${id}`)
        } catch(err){
            console.log(err)   
        }  
    }
  

    return (
        <div className="gmRecOne">
            {
                updatePageMode ?
            <>
            {/* ------------------Update Recipe Page------------------- */}

                { recipe.image && 
                <img className="gmRecOneImg" src={recipe.image} alt=""/>  
                }
                
                <form className="gmRecipeCreateForm">
                    <span className="gmRecipeCreateTitle">Update: {recipe.title}</span>
                    
                    <label>Update Title</label>
                    <input 
                        className="gmRecipeCreateInput" 
                        type="text" 
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}    
                        
                    />
                    
                    <label>Update Image</label>
                    <input 
                        className="gmRecipeCreateInput" 
                        type="text" 
                        name="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}    

                    />
                    
                    <label>Update Description</label>
                    <textarea 
                        className="gmRecipeCreateInput" 
                        type="text" 
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}    
                        
                    />
                    <label>Update Categories (choose from category list and seperate by comas)</label>
                    <input 
                        className="gmRecipeCreateInput" 
                        type="text" 
                        name="categories"
                        value={categories}
                        onChange={(e) => setCategories(e.target.value.toLowerCase().split(','))} 
                    />

                    <button className="gmRecipeCreateButton" type="submit" onClick={handleUpdate}>UPDATE</button>
                </form>

            </>
            
            :

            <>
                {/* ------------------Single Recipe Page------------------- */}

            { recipe.image && 
                <img className="gmRecOneImg" src={recipe.image} alt=""/>  
            }

            {/* ---Categories--- */}
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

            {/* ---Icons--- */}
                { recipe.userEmail === currentUserEmail &&
                    <div className="gmRecOneIcons">
                        {/* Update */}
                        <i className="gmRecOneEdit fas fa-user-edit"
                            onClick={() => setupdatePageMode(true)}
                        />
                        {/* Delete */}
                        <i className="gmRecOneDelete fas fa-trash-alt"
                            onClick={handleDelete} />      
                    </div>
                }

                <span className="gmRecOneTitle">{recipe.title}</span>
                
            {/* ---Author's email--- */}   
                <div className="gmRecOneEmail">
                    <span>Created by:&nbsp;&nbsp; 
                        <Link to={`/recipes?userEmail=${recipe.userEmail}`} className="link">
                            <i className="fas fa-envelope"></i> <b>{recipe.userEmail}</b>
                        </Link>
                    </span>
                </div>    
            </div>
            <hr/>
            
            {/* ---Description--- */}   
            <div className="gmRecOneDescription">  
                <p>{recipe.description}</p>
            </div>  
        
            </>
        }
    </div>    
    )
}


export default GrandmaRecipeOne;
