const router = require('express').Router();

const postCartUsers = require('../controllers/postCartUsers');
const getCartUsers = require('../controllers/getCartUsers');
const modifyStateCategory = require('../controllers/modifyStateCartUsers');
const deleteCartUsers = require("../controllers/deleteCartUsers");
const modifyCartUsers = require("../controllers/modifyCartUsers");
const deleteAllCart = require("../controllers/deleteAllCart");

router.post('/', postCartUsers);
router.get('/', getCartUsers);
router.put('/state', modifyStateCategory);
router.post('/delete_cart', deleteCartUsers);
router.get("/deleteAllCart/delete", deleteAllCart)

router.put('/', modifyCartUsers);


module.exports = router;