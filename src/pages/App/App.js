import React, { Component } from 'react';
import NavigationBar from '../../components/Navbar/Navbar';
import RecipeList from '../../components/Recipes/RecipeList';
import OnlineRecipeSearch from '../../components/OnlineRecipeSearch/OnlineRecipeSearch';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <h1>Main Page</h1>

        <OnlineRecipeSearch />
        <hr />
        <RecipeList />
      </div>
    )
  }
}



export default  App;