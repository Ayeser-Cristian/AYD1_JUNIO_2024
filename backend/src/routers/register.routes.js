const express = require('express');
const router = express.Router(); 

const {register} = require('../components/registrar')

router.post('/registro', register)

module.exports= router;