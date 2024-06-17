const connection = require('../db/conectiondb');

exports.login = (req, res) => {
    const { correo, contrasenia } = req.body;
    const values_query = [correo, contrasenia];
    const query = 'SELECT * FROM Usuario WHERE correo = ? AND contrasenia = ?';

    connection.query(query, values_query, (err, result) => {
        if (err) {
            console.error('Error al realizar el inicio de sesión: ', err);
            res.status(500).json({ message: 'Error interno del servidor', state:false });
            return;
        }

        
        if (result.length === 1) {
           
            res.status(200).json({ message: 'Inicio de sesión exitoso', usuario: result[0], state:true });
        } else {
              res.status(401).json({ message: 'Nombre de usuario o contrasena incorrectos', state:false });
        }
    });

};