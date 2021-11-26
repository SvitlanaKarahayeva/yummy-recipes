import axios from "axios";

export const getAllRecipes = async () => {
    try{
        let response = await axios.get('/recipes')
        return response.data
    }
    catch(error){
        console.log("Error accured", error)
    }
}
