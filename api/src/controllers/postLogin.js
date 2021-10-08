const passport = require('passport');

const postLogin = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      return res.status(404).send("No User Exists");
    }
    else {
      req.logIn(user, (err) => {
        if (err) return next(err);
        return res.send("Successfully Authenticated");
      });
    }
  })(req, res, next);
}

module.exports = postLogin;