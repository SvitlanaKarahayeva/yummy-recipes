// Componenets
import NavigationBar from '../../components/Navbar/Navbar';
import RecipeList from '../../components/Recipes/RecipeList';
import OnlineRecipePage from '../../components/OnlineRecipePage/OnlineRecipePage';


function App () {

    return (
      <div>
        <NavigationBar />
        <h1>Main Page</h1>

        <OnlineRecipePage />
        <hr />
        <RecipeList />
      </div>
    )
  }

export default  App;