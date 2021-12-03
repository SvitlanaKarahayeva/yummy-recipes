import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Component } from 'react'

// Componenets
import userService from "../../services/userService";
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import OnlineRecipePage from '../../components/OnlineRecipePage/OnlineRecipePage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import HomePage from "../HomePage/HomePage";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute"
import GrandmaRecipePage from "../GrandmaRecipePage/GrandmaRecipePage";
import GrandmaRecipeDetails from "../../components/GrandmaRecipeDetails/GrandmaRecipeDetails";
import GrandmaRecipeCreatePage from "../GrandmaRecipeCreatePage/GrandmaRecipeCreatePage";


class App extends Component {
  constructor(){
    super();
    this.state = {
      user: userService.getUser()
    }
  }

  handleRegisterOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }

  handleLogout = () => {
    this.setState({ user: userService.logout()})
  };

  render(){
    return (
      <Router>
        <NavigationBar 
          currentUser= {this.state.user} 
          handleLogout={this.handleLogout}
        />
        <Switch>
          
        <Route exact path="/">
            <HomePage />
          </Route>

  {/* ------------GRANDMA RECIPES-------------- */}

             {/* Create Recipe */}
        <ProtectedRoute exact path="/recipes/create"> 
              <GrandmaRecipeCreatePage currentUser= {this.state.user}  />
        </ProtectedRoute>
        
        {/* All recipes */}
        <ProtectedRoute exact path="/recipes">
              <GrandmaRecipePage currentUser= {this.state.user} />    
        </ProtectedRoute>  
        
        
         {/* individual recipe detail */}
          <ProtectedRoute exact path="/recipes/:id">
            <GrandmaRecipeDetails currentUser= {this.state.user} />
          </ProtectedRoute>

  {/* ------------LOGIN and REGISTRATION-------------- */}

          <Route path='/login' 
          render=
            {
              ({ history }) => 
                <LoginPage 
                  history={history} 
                  handleRegisterOrLogin={this.handleRegisterOrLogin} />
            }
          />

          <Route exact path="/register"
            render=
            {
              ({ history }) => 
                <RegisterPage 
                  history={history} 
                  handleRegisterOrLogin={this.handleRegisterOrLogin} />
            }
          />

    {/* ------------ONLINE RECIPES in production-------------- */}

          <ProtectedRoute exact path="/onlinerecipes" component={OnlineRecipePage}/>

        </Switch>     
      </Router> 
    )
  }
    
}

export default  App;