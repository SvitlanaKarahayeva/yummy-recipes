import React, { Component } from 'react';
import RecipeList from '../../components/Recipes/RecipeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Main Page</h1>
        <hr />
        <RecipeList />
      </div>
    )
  }
}



export default  App;