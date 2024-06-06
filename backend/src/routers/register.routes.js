const express = require('express');
const router = express.Router(); 

const {register} = require('../controllers/registrar')

router.post('/registro', register)

module.exports= router;