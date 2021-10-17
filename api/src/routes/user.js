const postSignup = require('../controllers/postSignup');
const postLogin = require('../controllers/postLogin');
const getLogout = require('../controllers/getLogout');
const getUserProfile = require('../controllers/getUserProfile');
const getUserRol = require('../controllers/getUserRol');
const getUserId = require('../controllers/getUserId');
const { isAuthenticated, isUnauthenticated } = require('../passportConfig/authenticators.js');
const giveAdmin = require('../controllers/giveAdmin');
const getAllAdmin = require('../controllers/getAllAdmin');
const getUserDetail = require('../controllers/getUserDetail');
const createUserDetail = require('../controllers/createUserDetail');
const getAllUserDetail = require('../controllers/getAllUserDetails');
const getAllUsers = require('../controllers/getAllUsers');
const putUser = require('../controllers/disableUser');
const changeRolUsers = require('../controllers/chageRolUser');
const { isAuthenticated, isUnauthenticated } = require('../passportConfig/authenticators.js');


const router = require('express').Router();

router.get("/allUserDetail", getAllUserDetail)
router.get("/userDetail/:user_detail", getUserDetail);
router.post("/userDetail/:user_detail", createUserDetail)
router.get("/", getAllUser );
router.get("/admin", getAllAdmin);
router.put("/giveAdmin/:id", giveAdmin);
router.post('/signup', isUnauthenticated, postSignup);
router.post('/login', isUnauthenticated, postLogin);
router.get('/logout', isAuthenticated, getLogout);
router.get('/info', isAuthenticated, getUserProfile);
router.get('/rol', isAuthenticated, getUserRol);
router.get('/id', isAuthenticated, getUserId);
router.get('/admin', getAllUsers);
router.put('/:id', putUser);
router.put('/rol/:id', changeRolUsers);

module.exports = router;