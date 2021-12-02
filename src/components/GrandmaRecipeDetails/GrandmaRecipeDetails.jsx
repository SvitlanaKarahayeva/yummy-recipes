import './GrandmaRecipeDetails.css';
import Categories from '../Categories/Categories'
import GrandmaRecipeOne from '../GrandmaRecipeOne/GrandmaRecipeOne'

function GrandmaRecipeDetails() {
    return (
        <div className="gmRecDetails">
            <GrandmaRecipeOne />
            <Categories />  
        </div>
    )
} 

export default GrandmaRecipeDetails
