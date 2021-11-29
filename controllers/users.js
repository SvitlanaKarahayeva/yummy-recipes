const User = require('../models/user')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

// REGISTER user
async function register(req, res){
    //create and instance of user model with data from req.body
    let  user = new User(req.body)
    try{
        //save user instance
        await user.save()
        //create token and return it to the client
        const token = createJWT(user)
        res.json({ token })
    }catch(err){
        res.status(400).json(err)
    }
}

// LOGIN user
async function login(req, res){
    try{
        // search for the user email
        const user = await User.findOne({ email: req.body.email })
        if(!user) return res.status(401).json({ err: 'bad credentials' })
        // using helper function from user model
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(isMatch){
                // if passwords match create a token and send it back
                const token = createJWT(user)
                res.json({ token })
            }else{
                return res.status(401).json({ err: 'bad credentials' })
            }
        })

    }catch(err){
        res.status(401).json(err)

    }
}

// helper function
function createJWT(user){
    return jwt.sign(
        {user},
        SECRET,
        {expiresIn: '24h'}
    )
}

module.exports = {
    register,
    login
}