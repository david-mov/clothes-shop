const registerUser = require('../controllers/registerUser');
const loginUser = require('../controllers/loginUser');
const logoutUser = require('../controllers/logoutUser');
const getUser = require('../controllers/getUser');
const { isAuthenticated, isUnauthenticated } = require('../passportConfig/authenticators.js')

const router = require('express').Router();

router.post('/signup', registerUser);
router.post('/login', isUnauthenticated, loginUser);
router.get('/logout', isAuthenticated, logoutUser);
router.get('/info', isAuthenticated, getUser);

module.exports = router;