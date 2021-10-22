const router = require('express').Router();
const emailSender = require('../controllers/emailSender');
const emailConfirm = require('../controllers/emailConfirm');
const resetEmail = require("../controllers/emailResetPassword")

router.get('/confirmEmail', emailConfirm);
router.get('/sendEmail', emailSender);
router.get('/resetEmail', resetEmail);

module.exports = router;