const { User } = require("../db.js");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

module.exports = function (passport) {

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

  passport.use(new localStrategy(
      { usernameField: 'email' },
      (email, password, done) => {
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
      }
    )
  );

  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log('profile data: ', profile);
    User.findOrCreate({ 
      where: { googleId: profile.id },
      defaults: {
        name: profile.displayName,
        email: profile.email,
      }
    })
    .then(([currentUser, created]) => {
      if (created) { console.log('created user: ', currentUser) }
      else { console.log('current user: ', currentUser) }
      return done(null, currentUser)
    })
    .catch(err => done(err));
  }))

};
