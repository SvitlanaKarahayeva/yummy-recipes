import './GrandmaRecipe.css'

function GrandmaRecipe() {
    return (
        <div className="gmRecipe">
            <img 
                src="https://cdn.theculturetrip.com/wp-content/uploads/2021/04/2b0fmky-e1619429563127.jpg" 
                alt="" 
            />  

            <div className="gmRecipeInfo">
                <div className="gmRecipeCategory">
                    <span>Lunch</span>
                    <span>Breakfast</span>
                </div>

                <span className="gmRecipeTitle">Lorem ipsum dolor sit amet</span>
                <hr /> 
                 
            </div>    
        </div>
    )
}

export default GrandmaRecipe;
