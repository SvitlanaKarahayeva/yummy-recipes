import axios from "axios";

// // GET recipes from mealdb API
// export const getOnlineRecipes =  () => {
//     try{
//       let response =  axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
//       return response
//     }
//     catch(error) { console.log("Error accured", error) }    
//   }

/* GRANDMA recipes services */

// Get All recipes from database
// proxy url (here is '/') is added in package.json: "proxy": "http://localhost:3001/api/"
  
const  getGrandmaRecipes = () => {
  try{
    let response = axios.get('/recipes')
    return response
  }
  catch(err) { console.log("Error accured", err) } 
}

const recipesServicesExports = {
  getGrandmaRecipes,
}

export default recipesServicesExports;