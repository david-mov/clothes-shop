const express = require('express');
const router = express.Router();


const {createImage, uploadImage2} = require('../controllers/createImage');





router.post('/', uploadImage2, createImage);







module.exports = router;