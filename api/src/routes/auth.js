const { isAuthenticated, isUnauthenticated } = require('../passportConfig/authenticators.js');
const passport = require('passport');
const postSignup = require('../controllers/postSignup');
const postLogin = require('../controllers/postLogin');
const getLogout = require('../controllers/getLogout');

const router = require('express').Router();

router.post('/signup', isUnauthenticated, postSignup);
router.post('/login', passport.authenticate('local'), postLogin);
router.get('/logout', isAuthenticated, getLogout);

// router.get('/google', getGoogle);
// router.get('/google/callback', getGoogleCallback);

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback', passport.authenticate('google'),
	(req, res) => {
		console.log('Google callback, user object: ', req.user)
	}
)