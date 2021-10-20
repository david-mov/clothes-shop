const router = require('express').Router();

const postCartUsers = require('../controllers/postCartUsers');
const getCartUsers = require('../controllers/getCartUsers');
const getCartUsers2 = require('../controllers/getCartUsers2');
const deleteCartUsers = require("../controllers/deleteCartUsers");
const modifyCartUsers = require("../controllers/modifyCartUsers");

router.post('/', postCartUsers);
router.get('/', getCartUsers);
router.get('/:Cart_Users', getCartUsers2);
router.post('/delete_cart', deleteCartUsers);


router.put('/', modifyCartUsers);


module.exports = router;