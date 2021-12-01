import './GrandmaRecipeCreatePage.css'

function GrandmaRecipeCreatePage() {
    return (
        <div className="gmRecipeCreate">
                <form className="gmRecipeCreateForm">
                    <span className="gmRecipeCreateTitle">Create new yummy recipe</span>
                    
                    <label>Title</label>
                    <input 
                        className="gmRecipeCreateInput" 
                        type="text" 
                        placeholder="Add a Title" 
                        name="title"
                        // onChange={this.handleChange}    
                        
                    />
                    
                    <label>Image address</label>
                    <input 
                        className="gmRecipeCreateInput" 
                        type="text" 
                        placeholder="Add your image url"
                        name="image"
                          // onChange={this.handleChange}
                    />
                    
                    <label>Description</label>
                    <textarea 
                        className="gmRecipeCreateInput" 
                        type="password" 
                        placeholder="Cooking instructions"
                        name="description"
                        // onChange={this.handleChange}
                    />
                    
                    
                    <button className="gmRecipeCreateButton">Create</button>
                </form>
            </div>
    )
}

export default GrandmaRecipeCreatePage
