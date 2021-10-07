const { User } = require("../db.js");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },(email, password, done) => {
      User.findOne({
        where: { email: email }
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
      .catch(err => done(err));
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findByPk(id)
    .then(user => {
      return done(null, user);
    })
    .catch(err => {
      return done(err);
    })
  });
};
