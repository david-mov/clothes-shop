const router = require('express').Router();

const postCart = require('../controllers/postCart');
/*const modifyCategory = require('../controllers/modifyCategory');
const disableCategory = require('../controllers/disableCategory');
*/
const getCart = require('../controllers/getCart');
router.post('/', postCart);
router.get('/', getCart);

/*
router.put('/:id', modifyCategory);

router.delete('/:id', disableCategory);
*/
module.exports = router;