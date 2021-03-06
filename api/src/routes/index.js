const router = require('express').Router();
const { isAuthenticated, isUnauthenticated } = require('../passportConfig/authenticators.js')

const productsRouter = require('./products');
const categoryRouter = require('./category');
const searchRouter = require('./search');
const sizeRouter = require('./size');
const typeRouter = require('./type');
const imageRouter = require('./image');
const userRouter = require('./user');
const ratingRouter = require('./rating');
const viewRouter = require('./view');
const authRouter = require('./auth');
const checkout = require("./checkout");
const postCart = require("./cart");
const cartUsers = require("./cartUsers");
const emailSender = require("./email")

router.use('/products', productsRouter);
router.use('/category', categoryRouter);
router.use('/search', searchRouter);
router.use('/size', sizeRouter);
router.use('/type', typeRouter);
router.use('/image', imageRouter);
router.use('/user', userRouter);
router.use('/rating', isUnauthenticated, ratingRouter);
router.use('/view', viewRouter);
router.use("/cart", postCart);
router.use('/auth', authRouter);
router.use("/checkout", checkout);
router.use("/cart_user", cartUsers);
router.use("/email", emailSender)

module.exports = router;