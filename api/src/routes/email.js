const router = require('express').Router();
const emailSender = require('../controllers/emailSender');
const emailConfirm = require('../controllers/emailConfirm');

router.get('/confirmEmail', emailConfirm);
router.get('/sendEmail', emailSender);

module.exports = router;