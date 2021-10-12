const express = require('express');
const router = express.Router();

const postAddRating = require('../controllers/postAddRating');
const getAllRating = require('../controllers/getAllRating');

router.get('/', getAllRating);

router.post('/', postAddRating);

module.exports = router;