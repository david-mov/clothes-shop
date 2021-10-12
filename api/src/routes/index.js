const router = require('express').Router();

const productsRouter = require('./products');
const categoryRouter = require('./category');
const searchRouter = require('./search');
const sizeRouter = require('./size');
const typeRouter = require('./type');
const imageRouter = require('./image');
const userRouter = require('./user')

router.use('/products', productsRouter);
router.use('/category', categoryRouter);
router.use('/search', searchRouter);
router.use('/size', sizeRouter);
router.use('/type', typeRouter);
router.use('/image', imageRouter);
router.use('/user', userRouter);

module.exports = router;