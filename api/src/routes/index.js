const router = require('express').Router();

const productsRouter = require('./products');
const categoryRouter = require('./category');
const searchRouter = require('./search');
const sizeRouter = require('./size');
const typeRouter = require('./type');

router.use('/products', productsRouter);
router.use('/category', categoryRouter);
router.use('/search', searchRouter);
router.use('/size', sizeRouter);
router.use('/type', typeRouter);

module.exports = router;