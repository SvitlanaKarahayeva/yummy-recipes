// Componenets
import NavigationBar from '../../components/Navbar/Navbar';
import OnlineRecipePage from '../../components/OnlineRecipePage/OnlineRecipePage';
import LoginPage from '../LoginPage/LoginPage';


function App () {

    return (
      <div>
        <NavigationBar />
        <h1>Main Page</h1>
       
       <LoginPage /> 
      </div>
    )
  }

export default  App;