
const express = require('express');
const router = express.Router(); 


const {login} = require('../controllers/login')
const {sendEmail} = require('../controllers/email')

router.post('/login', login)

router.post('/email', sendEmail)

module.exports= router;