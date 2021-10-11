const postSignup = require('../controllers/postSignup');
const postLogin = require('../controllers/postLogin');
const getLogout = require('../controllers/getlogout');
const getUser = require('../controllers/getUser');
const { isAuthenticated, isUnauthenticated } = require('../passportConfig/authenticators.js')

const router = require('express').Router();

router.post('/signup', isUnauthenticated, postSignup);
router.post('/login', isUnauthenticated, postLogin);
router.get('/logout', isAuthenticated, getLogout);
router.get('/info', isAuthenticated, getUser);

module.exports = router;