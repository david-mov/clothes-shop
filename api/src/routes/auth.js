const { isAuthenticated, isUnauthenticated } = require('../passportConfig/authenticators.js');
const passport = require('passport');
const postSignup = require('../controllers/postSignup');
const postLogin = require('../controllers/postLogin');
const getLogout = require('../controllers/getLogout');

const router = require('express').Router();

router.post('/signup', isUnauthenticated, postSignup);
router.post('/login', isUnauthenticated, postLogin);
router.get('/logout', isAuthenticated, getLogout);

// router.get('/google', getGoogle);
// router.get('/google/callback', getGoogleCallback);

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get( '/google/callback',
    passport.authenticate( 'google', {
        successRedirect: 'http://localhost:3000/login/success',
        failureRedirect: 'http://localhost:3000/login/failure'
}),
	(req, res) => {
		console.log('Google callback, user object: ', req.user)
		res.send('Correctly signing in!')
	}
);

module.exports = router;