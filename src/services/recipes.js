import axios from "axios";



// GET recipes from mealdb API

export const getOnlineRecipes =  () => {
    try{
      let response =  axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      return response
    }
    catch(error) { console.log("Error accured", error) }    
  }

// const EDAMAM_ID = process.env.EDAMAM_ID
// const EDAMAM_KEY = process.env.EDAMAM_KEY
export const getORecipes=  () => {
  try{
    let response =  axios.get(`https://api.edamam.com/search?q=chicken&app_id=58ced05b&app_key=03891e0322ffd84fed26b74a8914621c`)
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
