import {useState} from 'react'
import { useHistory } from 'react-router-dom'
import recipeService from '../../services/recipeService';
import './GrandmaRecipeCreatePage.css'



function GrandmaRecipeCreatePage(props) {
    const currentUserEmail = props.currentUser.email
    // console.log(props.currentUser.email)
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [categories, setCategories] = useState('')
    const history = useHistory()
    

    
     const handleSubmit = async (event) => {
        event.preventDefault();
        const newRecipe = {
            userEmail: currentUserEmail,
            title,
            image,
            description,
            categories,
            
        }
        try{
           const res = recipeService.createGrandmaRecipe(newRecipe)
        //    redirect to home page
           history.push('/recipes')

        }catch(error){
            console.log(error)
        }
        
    }
    
    return (
        <div className="gmRecipeCreate" onSubmit={handleSubmit}>
                <form className="gmRecipeCreateForm">
                    <span className="gmRecipeCreateTitle">Create new yummy recipe</span>
                    
                    <label>Title</label>
                    <input 
                        className="gmRecipeCreateInput" 
                        type="text" 
                        placeholder="Add a Title" 
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}    
                        
                    />
                    
                    <label>Image address</label>
                    <input 
                        className="gmRecipeCreateInput" 
                        type="text" 
                        placeholder="Add your image url"
                        name="image"
                        onChange={(e) => setImage(e.target.value)}    

                    />
                    
                    <label>Description</label>
                    <textarea 
                        className="gmRecipeCreateInput" 
                        type="text" 
                        placeholder="Cooking instructions"
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}    
                        
                    />
                    <label>Category</label>
                    <input 
                        className="gmRecipeCreateInput" 
                        type="text" 
                        placeholder="Add category"
                        name="categories"
                        onChange={(e) => setCategories(e.target.value.toLowerCase())} 
                    />
                    
                    
                    <button className="gmRecipeCreateButton" type="submit">Create</button>
                </form>
            </div>
    )
}

export default GrandmaRecipeCreatePage
