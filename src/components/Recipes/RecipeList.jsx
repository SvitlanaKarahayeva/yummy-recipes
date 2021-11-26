import React, { Component } from 'react';
import { getAllRecipes } from '../../services/recipes';

class RecipeList extends Component {
    constructor(props){
    super(props)
      this.state = {
        recipes: []
    }
  }

  async componentDidMount(){
    let data = await getAllRecipes() 
    console.log(data)
    this.setState({ recipes: data })   
  }
  
    render() {
        return (
            <div>
                <h1>All recipes</h1>

                { this.state.recipes.length > 0 &&
                    <ul>
                        {this.state.recipes.map((recipe, idx) => 
                        <li key={idx}>
                            <div>{recipe}</div>
                            {console.log("This is a single recipe",recipe)}
                        </li>)}
                    </ul>
                }   
                {
                    this.state.recipes.length === 0 &&
                    <div>No recipes created yet</div>
                } 

                
            </div>
        )
    }
}

export default RecipeList;
