const router = require('express').Router();

const getAllProducts = require('../controllers/getAllProducts');
const createProduct = require('../controllers/createProduct');
const getProductDetails = require('../controllers/getProductDetails');
const modifyProduct = require('../controllers/modifyProduct');
const disableProduct = require('../controllers/disableProduct');
const postProductCategory = require('../controllers/postProductCategory');
const postProductType = require('../controllers/postProductType');

router.get('/', getAllProducts);
router.post('/', createProduct);

router.get('/:id', getProductDetails);
router.put('/:id', modifyProduct);
router.put('/:id', disableProduct);

router.post('/:id/category/:categoryId', postProductCategory);
router.post('/:id/type/:typeId', postProductType);

module.exports = router;