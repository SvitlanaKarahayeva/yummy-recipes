import GrandmaRecipe from '../GrandmaRecipe/GrandmaRecipe';
import {Link} from 'react-router-dom'
import './GrandmaRecipes.css'

function GrandmaRecipes(props) {
    return (
  
        <div className="gmRecipes">
            <div className="gmRecipesHeader">
                <img 
                    className="gmRecipesHeaderImg"
                    src="https://media.istockphoto.com/vectors/granny-baked-some-cookies-vector-id453416701?b=1&k=20&m=453416701&s=612x612&w=0&h=ts9UyK9haXfqZ1Vmwi8TpnB9PU-8fAjknxatovRyX_A=" 
                    alt="" 
                />
                
                <h1 className="gmRecipesHeaderName">Grandma Recipes</h1>
                
                <div className="gmRecipesAddDiv">
                    <Link to='/create'>
                        <i className="gmRecipesAddIcon far fa-plus-square"></i> 
                        <span className="gmRecipesAddSign"><b>Add New Yummy</b></span>
                    </Link>
                </div>
            </div> 
            {/* mapping through recipes list from db */}
            { props.recipes.map(recipe =>( 
                <GrandmaRecipe recipe={recipe}/> 
                )) 
            }        
        </div>
    )
}

export default GrandmaRecipes;
