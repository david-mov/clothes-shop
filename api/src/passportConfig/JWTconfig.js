const { User } = require("../db.js");
const passport = require("passport");
const passportJwt = require("passport-jwt");
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;


passport.use(
  new StrategyJwt(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    function (jwtPayload, done) {
      console.log(jwtPayload)
      return User.findOne({ where: { id: jwtPayload.id } })
      .then((user) => {
        console.log(user)
        return done(null, user);
      })
      .catch((err) => {
        return done(err);
      });
    }
  )
);