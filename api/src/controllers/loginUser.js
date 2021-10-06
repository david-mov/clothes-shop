const passport = require("passport");

const loginUser = (req, res) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.status(404).send("No User Exists");
    else {
      req.logIn(user, (err) => {
        // console.log(user)
        if (err) throw err;
        res.send("Successfully Authenticated");
        // console.log(req.user)
      });
    }
  })(req, res);
}

module.exports = loginUser;