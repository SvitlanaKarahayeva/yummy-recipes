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

  render(){
    return (
      <Router>
        <NavigationBar currentUser= {this.state.user} />
        <Switch>
          
        <Route exact path="/">
            <HomePage />
          </Route>

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

          <Route exact path="/onlinerecipes">
            <OnlineRecipePage />
          </Route>
          
        
        </Switch>     
      </Router> 
    )
  }
  
    
}

export default  App;