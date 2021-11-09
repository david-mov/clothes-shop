const router = require('express').Router();
const emailSender = require('../controllers/emailSender');
const emailConfirm = require('../controllers/emailConfirm');
const resetEmail = require("../controllers/emailResetPassword")

router.post('/confirmEmail', emailConfirm);
router.post('/sendEmail', emailSender);
router.post('/resetEmail', resetEmail);

module.exports = router;