import GrandmaRecipes from '../../components/GrandmaRecipes/GrandmaRecipes';
import Categories from '../../components/Categories/Categories'
import './GrandmaRecipePage.css'

function GrandmaRecipePage() {
    return (
        <div className="gm-recipes-page">
            <GrandmaRecipes /> 
            <Categories />     
        </div>
    )
}

export default GrandmaRecipePage
