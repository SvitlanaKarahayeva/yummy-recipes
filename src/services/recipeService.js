import axios from "axios";

// Fetching 3rd party api for Online Recipes
// // GET recipes from mealdb API
// export const getOnlineRecipes =  () => {
//     try{
//       let response =  axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
//       return response
//     }
//     catch(error) { console.log("Error accured", error) }    
//   }



/* ---------------------------------------- */

// Get All recipes from MongoDB
// proxy url (here is '/') is added to package.json: "proxy": "http://localhost:3001/api/"
// called in GrandmaRecipePage
const  getGrandmaRecipes = (search) => {
  try{
    let response = axios.get('api/recipes' + search)
    return response
  } catch(err) { console.log("Error accured", err) } 
}

// Get One recipe from database, 
const getOneGrandmaRecipe = (id) => {
    try{
      let response = axios.get('api/recipes/' + id);
      return response
    } catch(err){ console.log("Error accured", err) } 
}

// Create new recipe (called in GradmaRecipeCreatePage)
const createGrandmaRecipe = (newRecipe) => {
  try{
    axios.post('api/recipes/create', newRecipe)

 } catch(err) { console.log("Error accured", err) } 
}

const recipesServicesExports = {
  getGrandmaRecipes,
  getOneGrandmaRecipe,
  createGrandmaRecipe,
}

export default recipesServicesExports;