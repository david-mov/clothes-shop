const router = require('express').Router();

const checkout = require('../controllers/checkout');


router.get('/', checkout);

module.exports = router;