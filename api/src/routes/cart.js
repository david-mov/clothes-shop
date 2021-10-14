const router = require('express').Router();

const postCart = require('../controllers/postCart');
const getCart = require('../controllers/getCart');
const deleteCart = require("../controllers/deleteCart");

router.post('/', postCart);
router.get('/', getCart);
router.delete('/', deleteCart);

/*
router.put('/:id', modifyCategory);

*/
module.exports = router;