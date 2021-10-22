const router = require('express').Router();

const checkout = require('../controllers/checkout');


router.get('/:idFinal', checkout);

module.exports = router;