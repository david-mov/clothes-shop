const { User } = require("../db.js");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },(username, password, done) => {
      User.findOne({
        where: { email: username }
      })
      .then((user) => {
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, res) => {
          if (err) throw err;
          if (res === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        })
      })
      .catch(err => console.error(err));
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    User.findOne(id)
    .then(user => {
      const userInformation = {
        name: user.name,
        email: user.email,
      };
      cb(null, userInformation);
    })
    .catch(err => {
      cb(err, {});
    })
  });
};
