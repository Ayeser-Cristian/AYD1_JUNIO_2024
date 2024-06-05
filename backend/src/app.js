// Importación de los módulos necesarios
const express = require('express') // Importa el framework Express para la creación de la aplicación web
const cors = require('cors') // Importa el módulo CORS para habilitar el intercambio de recursos entre diferentes orígenes


// Creación de la aplicación Express
const MyApp = express(); 

MyApp.use(express.json()) //para analizar los cuerpos de las solicitudes en formato JSON


const bodyParser = require('body-parser'); 
MyApp.use(bodyParser.json({ limit: '15mb' }));

MyApp.use(cors()) //para permitir solicitudes CORS (Cross-Origin Resource Sharing) esto desde el frontend


//Importar los routes
const loginRouter= require('./routers/login.routes.js')


const registerRouter= require('./routers/register.routes.js')

MyApp.use(loginRouter)
MyApp.use(registerRouter)

module.exports = MyApp;