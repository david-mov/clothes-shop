const registerUser = require('../controllers/registerUser');
const loginUser = require('../controllers/loginUser');
const logoutUser = require('../controllers/logoutUser')

const router = require('express').Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser)

module.exports = router;