const User = require('../models/user')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

async function signup(req, res){
    //create ans instance of user model with data from req.body
    let  user = new User(req.body)
    try{
        //save user instance
        await user.save()
        //create token and return it to the client
        const token = createJWT(user)
        res.json({token})
    }catch(err){
        res.status(400).json(err)
    }
}


function createJWT(user){
    return jwt.sign(
        {user},
        SECRET,
        {expiresIn: '24h'}
    )
}

module.exports = {
    signup,
}