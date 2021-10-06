const bcrypt = require('bcryptjs');
const { User } = require("../db");


const registerUser = async(req, res, next) => {
 const {email, password, name} = req.body
 try{
    const user = await User.findOne({ 
    where: {
        email
    }
})
    if(user){
        return res.send("user already exists")
    }else{
        const hashedPassword = await bcrypt.hash(password, 10)
        await User.create({
            name,
            email,
            password: hashedPassword
        })
        res.send("user created correctly")
    }
}
 catch(err){
    next(err)
}
}

module.exports =  registerUser;

/*app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});*/