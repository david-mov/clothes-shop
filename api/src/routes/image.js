const express = require('express');
const router = express.Router();


const {createImage, uploadImage2} = require('../controllers/createImage');
const getImageDetails = require('../controllers/getImageDetails');





router.post('/', uploadImage2, createImage);

router.get('/:id', getImageDetails);







module.exports = router;