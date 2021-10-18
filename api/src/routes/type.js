const router = require('express').Router();

const createType = require('../controllers/createType');
const getProductsByType = require('../controllers/getProductsByType');
const modifyType = require('../controllers/modifyType');
const disableType = require('../controllers/disableType');
const getAllTypes = require('../controllers/getAllTypes');
const getUpdateTypeDetails = require('../controllers/getUpdateTypeDetails');

router.post('/', createType);

router.get('/', getAllTypes);

router.get('/:typeName', getProductsByType);

router.put('/update/:id', modifyType);

router.delete('/:id', disableType);

router.get("/update/:id", getUpdateTypeDetails)
module.exports = router;