const registerUser = require('../controllers/registerUser');
// const loginUser = require('../controllers/loginUser');
const logoutUser = require('../controllers/logoutUser');
// const getUser = require('../controllers/getUser')

const router = require('express').Router();

router.post('/register', registerUser);
// router.post('/login', loginUser);
router.get('/logout', logoutUser);
// router.get('/', getUser);

module.exports = router;