const router = require('express').Router();

const getProductsBySearch = require('../controllers/getProductsBySearch')

router.get('/', getProductsBySearch)

module.exports = router;