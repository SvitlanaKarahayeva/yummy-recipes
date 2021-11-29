import axios from "axios";

// GET recipes from mealdb API
export const getOnlineRecipes =  () => {
    try{
      let response =  axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      return response
    }
    catch(error) { console.log("Error accured", error) }    
  }


// export const getAllRecipes = async () => {
//     try{
//         let response = await axios.get('/recipes')
//         return response.data
//     }
//     catch(error){
//         console.log("Error accured", error)
//     }
// }
