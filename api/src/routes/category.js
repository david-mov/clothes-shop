const router = require('express').Router();

const createCategory = require('../controllers/createCategory');
const getProductsByCategory = require('../controllers/getProductsByCategory');
const modifyCategory = require('../controllers/modifyCategory');
const disableCategory = require('../controllers/disableCategory');
const getAllCategories = require('../controllers/getAllCategories');

router.post('/', createCategory);

router.get('/', getAllCategories);

router.get('/:categoryName', getProductsByCategory);

router.put('/:id', modifyCategory);

router.delete('/:id', disableCategory);

module.exports = router;