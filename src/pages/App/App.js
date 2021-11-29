import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Componenets
import NavigationBar from '../../components/Navbar/Navbar';
import OnlineRecipePage from '../../components/OnlineRecipePage/OnlineRecipePage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage'


function App () {
  
    return (
      <Router>
        <NavigationBar />
        <Switch>
          
          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/register">
            <RegisterPage />
          </Route>

          <Route exact path="/onlinerecipes">
            <OnlineRecipePage />
          </Route>
          
        
        </Switch>     
      </Router>
      
    )
  }

export default  App;