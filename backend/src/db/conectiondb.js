const mysql = require('mysql2');
require('dotenv').config(); // Cargar las variables de entorno

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "secret", // Usar la variable de entorno para la contraseña
  database: "ejemploayd1",
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos: ', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL.');
});

module.exports = connection;
