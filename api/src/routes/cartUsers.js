const router = require('express').Router();

const postCartUsers = require('../controllers/postCartUsers');
const getCartUsers = require('../controllers/getCartUsers');
const deleteCartUsers = require("../controllers/deleteCartUsers");
const modifyCartUsers = require("../controllers/modifyCartUsers");

router.post('/', postCartUsers);
router.get('/', getCartUsers);
router.post('/delete_cart', deleteCartUsers);


router.put('/', modifyCartUsers);


module.exports = router;