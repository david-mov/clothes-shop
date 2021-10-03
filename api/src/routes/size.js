const router = require('express').Router();

const createSize = require('../controllers/createSize');
const getProductsBySize = require('../controllers/getProductsBySize');
const modifySize = require('../controllers/modifySize');
const disableSize = require('../controllers/disableSize');
const getAllSizes = require('../controllers/getAllSizes');

router.post('/', createSize);

router.get('/', getAllSizes);

router.get('/:sizeName', getProductsBySize);

router.put('/:id', modifySize);

router.delete('/:id', disableSize);

module.exports = router;