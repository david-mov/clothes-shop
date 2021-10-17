const { isAuthenticated, isUnauthenticated } = require('../passportConfig/authenticators.js')
const getUserProfile = require('../controllers/getUserProfile');
const getUserRol = require('../controllers/getUserRol');
const getUserId = require('../controllers/getUserId');

const router = require('express').Router();

router.get('/info', isAuthenticated, getUserProfile);
router.get('/rol', isAuthenticated, getUserRol);
router.get('/id', isAuthenticated, getUserId);

module.exports = router;