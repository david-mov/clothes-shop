const router = require('express').Router();

const postCart = require('../controllers/postCart');
const getCart = require('../controllers/getCart');
const deleteCart = require("../controllers/deleteCart");
const modifyCart = require("../controllers/modifyCart")

router.post('/', postCart);
router.get('/', getCart);
router.get('/delete/:productId', deleteCart);


router.put('/', modifyCart);


module.exports = router;