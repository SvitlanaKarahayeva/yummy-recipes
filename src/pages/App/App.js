import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Component } from 'react'

// Componenets
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import OnlineRecipePage from '../../components/OnlineRecipePage/OnlineRecipePage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import HomePage from "../HomePage/HomePage";
import userService from "../../services/userService";
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

          <Route exact path="/createrecipe">
            <GrandmaRecipeCreatePage />
          </Route>
          


        {/* infividual recipe detsail */}
          {/* <Route exact path="/">
            <GrandmaRecipeDetails />
          </Route> */}

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

          <ProtectedRoute exact path="/onlinerecipes" component={OnlineRecipePage}/>
          <ProtectedRoute exact path="/grandmarecipes" component={GrandmaRecipePage}/>
           
          
        
        </Switch>     
      </Router> 
    )
  }
  
    
}

export default  App;