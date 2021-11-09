const router = require('express').Router();

const createSize = require('../controllers/createSize');
const getProductsBySize = require('../controllers/getProductsBySize');
const modifySize = require('../controllers/modifySize');
const disableSize = require('../controllers/disableSize');
const getAllSizes = require('../controllers/getAllSizes');
const getUpdateSizeDetails = require('../controllers/getUpdateSizeDetails');

router.post('/', createSize);

router.get('/', getAllSizes);

router.get('/:sizeName', getProductsBySize);

router.get("/update/:id", getUpdateSizeDetails)

router.put('/update/:id', modifySize);

router.delete('/:id', disableSize);
 
module.exports = router;