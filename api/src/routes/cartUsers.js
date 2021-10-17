const router = require('express').Router();

const postCartUsers = require('../controllers/postCartUsers');
// const getCartUsers = require('../controllers/getCart');
// const deleteCartUsers = require("../controllers/deleteCart");
// const modifyCartUsers = require("../controllers/modifyCart");

router.post('/', postCartUsers);
// router.get('/', getCartUsers);
// router.get('/delete/:productId', deleteCartUsers);


// router.put('/', modifyCartUsers);


module.exports = router;