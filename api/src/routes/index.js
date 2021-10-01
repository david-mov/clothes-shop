const router = require('express').Router();

const productsRouter = require('./products');
const categoryRouter = require('./category');
const searchRouter = require('./search');

router.use('/products', productsRouter);
router.use('/category', categoryRouter);
router.use('/search', searchRouter);

module.exports = router;