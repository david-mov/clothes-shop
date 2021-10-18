const express = require('express');
const router = express.Router();

const postAddview = require('../controllers/postAddView');
const getAllViews = require('../controllers/getAllView');

router.get('/', getAllViews);
router.post('/', postAddview);


module.exports = router;