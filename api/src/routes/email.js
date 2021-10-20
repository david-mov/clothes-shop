const router = require('express').Router();
const emailSender = require('../controllers/emailSender');

router.get('/', emailSender);

module.exports = router;