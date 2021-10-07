const bycrypt = require("bcryptjs")
const { User } = require("../db");
const jwt = require("jsonwebtoken");

const loginUser =  async (req, res) => {
  const { email, password } = req.body;
console.log(req.body)
const userWithEmail = await User.findOne({ where: { email } }).catch(
  (err) => {
    console.log("Error: ", err);
  }
  );
  console.log(userWithEmail)
  const verifico = await bycrypt.compare(password, userWithEmail.password)
  console.log(verifico)
  console.log(password)
  console.log(userWithEmail.password)
  if (!userWithEmail)
    return res
      .status(400)
      .json({ message: "Email or password does not match!" });

  if (!verifico)
    return res
      .status(400)
      .json({ message: "Email or password does not match!" });

  const jwtToken = jwt.sign(
    { id: userWithEmail.id, email: userWithEmail.email },
    process.env.JWT_SECRET
  );
  res.json({ message: "Welcome Back!", token: jwtToken });
};

module.exports = loginUser;