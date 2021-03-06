import tokenService from './tokenService'
const BASE_URL = 'http://localhost:3001/users'

//REGISTER user

function register(user){
    return fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(user)
    })
    .then(res => {
        if (res.ok) return res.json()
        throw new Error('Email already taken')
    })
    .then( ({ token }) => tokenService.setToken(token))
}

// LOGIN user

function login(credentials){
    return fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(credentials)
    })
    .then(res => {
        if (res.ok) return res.json()
        throw new Error('Email or password incorrect')
    })
    .then( ({token}) => tokenService.setToken(token))
}

function logout(){
    tokenService.removeToken();
} 

// 
function getUser() {
    return tokenService.getUserFromToken();
  }

const userServicesExports = {
    register,
    login,
    logout,
    getUser
}

export default userServicesExports