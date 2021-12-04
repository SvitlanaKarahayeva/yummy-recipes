import GrandmaRecipe from '../GrandmaRecipe/GrandmaRecipe';
import {Link} from 'react-router-dom'
import './GrandmaRecipes.css'

function GrandmaRecipes(props) {
    return (
  
        <div className="gmRecipes">
            <div className="gmRecipesHeader">
                <img 
                    className="gmRecipesHeaderImg"
                    src="https://i.imgur.com/SUJv0h8.jpg" 
                    alt="" 
                />
                
                <h1 className="gmRecipesHeaderName">Grandma Recipes</h1>
                
                <div className="gmRecipesAddDiv link">
                    <Link to='/recipes/create'>
                        <i className="gmRecipesAddIcon far fa-plus-square"></i> 
                        <span className="gmRecipesAddSign link"><b>Add New Yummy</b></span>
                    </Link>
                </div>
            </div> 

            {/* mapping through recipes list from db */}
            
            {  props.recipes?.map((recipe, idx) =>( 
                <GrandmaRecipe key={idx} recipe={recipe}/> 
                )) 
            }        
        </div>
    )
}

export default GrandmaRecipes;
