import axios from "axios";

const  getCategories = () => {
    try{
      let response = axios.get('/categories')
      return response
    }
    catch(err) { console.log("Error accured", err) } 
  }
  
const categoryServicesExports = {
    getCategories
  }
  
export default categoryServicesExports;