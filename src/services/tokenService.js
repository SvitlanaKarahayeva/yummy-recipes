function setToken(token){
    if(token){
        localStorage.setItem('token', token)
    }else {
       localStorage.removeItem('token') 
    }
}

// responsible ofr grabbing token from local storage
function getToken(){
    let token = localStorage.getItem('token')
    if(token){
        const payload = JSON.parse(atob(token.split('.')[1]))
        if(payload.exp < Date.now() / 1000){
            localStorage.removeItem('token')
            token = null
        }
    }
    return token
}

// used to log out the user, called in userServices function logout
function removeToken() {
    localStorage.removeItem("token");
  }

function getUserFromToken(){
    const token = getToken()
    // if exhists, we split and grab the user property from 2nd part of the token (payload) 
    // if doesnt exhist- return null
    return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

const tokenServicesExports = {
    setToken,
    getToken,
    removeToken,
    getUserFromToken
}
export default tokenServicesExports;