const { User } = require("../db");
const bcrypt = require('bcryptjs');

const RegisterUser =  async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body)
  const alreadyExistsUser = await User.findOne({
     where: { email } 
    })
    .catch(
    (err) => {console.log("Error: ", err);}
  );

  if (alreadyExistsUser) {
    return res.status(409).json({ message: "User with email already exists!" });
  }
  const hashedPassword = await bcrypt.hash(password, 10)
            const newUser = await User.create({
                name,
                email,
                password: hashedPassword
            });
  const savedUser = await newUser.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Cannot register user at the moment!" });
  });

  if (savedUser) res.json({ message: "Thanks for registering" });
};

module.exports = RegisterUser;