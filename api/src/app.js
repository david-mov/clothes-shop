const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const session = require('express-session');
const passport = require('passport');



require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser("secretcode"));
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
server.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
)
server.use(passport.initialize());
server.use(passport.session());
require("./passportConfig/localPassportConfig")(passport);

server.use((req, res, next) => {
  console.log(req.session);
  console.log(req.user);
  next();
});

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

const getUser = (req, res, next) => {
  // console.log(req.user);
  res.json({ name: 'pablito', email: 'pablito12@mail.com' })
}

server.post('/user/login', loginUser);
server.get('/user', getUser);

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = {
  server,
  passport,
};
