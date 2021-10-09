const router = require('express').Router();

const getAllProducts = require('../controllers/getAllProducts');
const createProduct = require('../controllers/createProduct');
const getProductDetails = require('../controllers/getProductDetails');
const getUpdateProductDetails = require('../controllers/getUpdateProduct');
const modifyProduct = require('../controllers/modifyProduct');
const disableProduct = require('../controllers/disableProduct');
const postProductCategory = require('../controllers/postProductCategory');

router.get('/', getAllProducts);
router.post('/', createProduct);

router.get('/:id', getProductDetails);
router.get('/update/:id', getUpdateProductDetails);
router.put('/:id', modifyProduct);
router.delete('/:id', disableProduct);

router.post('/:id/category/:categoryId', postProductCategory);
 
module.exports = router;