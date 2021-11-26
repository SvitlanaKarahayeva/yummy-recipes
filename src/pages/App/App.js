import React, { Component } from 'react';
import NavigationBar from '../../components/Navbar/Navbar';
import RecipeList from '../../components/Recipes/RecipeList';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <h1>Main Page</h1>
        <hr />
        <RecipeList />
      </div>
    )
  }
}



export default  App;