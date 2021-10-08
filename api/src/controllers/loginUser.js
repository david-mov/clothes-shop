const bycrypt = require("bcryptjs")
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const decode = require('jwt-decode')


const loginUser =  async (req, res) => {
  const { email, password } = req.body;
const userWithEmail = await User.findOne({ where: { email } }).catch(
  (err) => {
    console.log("Error: ", err);
  }
  );
  if (!userWithEmail)
  return res
  .status(400)
  .json({ message: "Email or password does not match!" });
  
  const verifico = await bycrypt.compare(password, userWithEmail?.password)
  if (!verifico)
    return res
      .status(400)
      .json({ message: "Email or password does not match!" });

  const jwtToken = jwt.sign(
    { id: userWithEmail.id, email: userWithEmail.email },
    process.env.JWT_SECRET,
  );

  const decodeo = decode(jwtToken)
  console.log(decodeo)
  res.json({ message: "Welcome Back!", token: jwtToken });
};

module.exports = loginUser;