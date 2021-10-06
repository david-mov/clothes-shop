const passport = require("passport");

const loginUser = (req, res) => {
passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        console.log(user)
        if (err) throw err;
        res.send("Successfully Authenticated");
      });
    }
  })(req, res);
}

module.exports = loginUser;