const { isAuthenticated, isUnauthenticated } = require('../passportConfig/authenticators.js')
const getUserProfile = require('../controllers/getUserProfile');
const getUserRol = require('../controllers/getUserRol');
const getUserId = require('../controllers/getUserId');
const getAllUsers = require('../controllers/getAllUsers');
const putUser = require('../controllers/disableUser');
const changeRolUsers = require('../controllers/chageRolUser');
const getUserDetail = require('../controllers/getUserDetail');
const getAllUserDetail = require('../controllers/getAllUserDetails');
const createUserDetail = require('../controllers/createUserDetail');
const createOrder = require('../controllers/createOrder');
const getUserIdParams = require('../controllers/getUserIdParams');
const modifyUserDetail = require('../controllers/putUserDetails');
const getAllOrders = require('../controllers/getAllOrder.js');


const router = require('express').Router();

router.put("/userDetail/:user_detail", modifyUserDetail)
router.get("/user/:id", getUserIdParams);
router.get("/allUserDetail", getAllUserDetail)
router.get("/userDetail/:user_detail", getUserDetail);
router.get('/info', isAuthenticated, getUserProfile);
router.get('/rol', isAuthenticated, getUserRol);
router.get('/id', isAuthenticated, getUserId);
router.get('/admin', getAllUsers);
router.get('/order', getAllOrders);
router.put('/:id', putUser);
router.put('/rol/:id', changeRolUsers);
router.post("/userDetail/:user_detail", createUserDetail)
router.post('/order', createOrder);

module.exports = router;

