// Componenets
import NavigationBar from '../../components/Navbar/Navbar';
import OnlineRecipePage from '../../components/OnlineRecipePage/OnlineRecipePage';
import LoginPage from '../LoginPage/LoginPage';
import Register from '../Register/Register'


function App () {

    return (
      <div>
        <NavigationBar />
        <h1>Main Page</h1>
       
       <Register /> 
      </div>
    )
  }

export default  App;