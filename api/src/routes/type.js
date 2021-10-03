const router = require('express').Router();

const createType = require('../controllers/createType');
const getProductsByType = require('../controllers/getProductsByType');
const modifyType = require('../controllers/modifyType');
const disableType = require('../controllers/disableType');
const getAllTypes = require('../controllers/getAllTypes');

router.post('/', createType);

router.get('/', getAllTypes);

router.get('/:TypeName', getProductsByType);

router.put('/:id', modifyType);

router.delete('/:id', disableType);

module.exports = router;