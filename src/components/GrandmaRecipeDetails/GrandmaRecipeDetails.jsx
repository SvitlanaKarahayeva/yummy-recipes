import './GrandmaRecipeDetails.css';
import Categories from '../Categories/Categories'
import GrandmaRecipeOne from '../GrandmaRecipeOne/GrandmaRecipeOne'

function GrandmaRecipeDetails(props) {
    const currentUser = props.currentUser

    return (
        <div className="gmRecDetails">
            <GrandmaRecipeOne currentUser={currentUser}/>
            <Categories />  
        </div>
    )
} 

export default GrandmaRecipeDetails
