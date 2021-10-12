const bcrypt = require('bcryptjs');
const { User, Rol } = require("../db");


const postSignup = async(req, res, next) => {
    const {email, password} = req.body
    try{
        const user = await User.findOne({ where: { email }})
        if(user){
            return res.send("User already exists")
        }else{
            const hashedPassword = await bcrypt.hash(password, 10)
            const newUser = await User.create({
                ...req.body,
                password: hashedPassword
            });
            await newUser.setRol(3); // normal user by default
            res.send("User created correctly")
        }
    }
    catch(err){
        next(err)
    }
}

module.exports =  postSignup;