const connection = require('../db/conectiondb');

function register  (req, res)  {
    const { correo, contrasenia, nombre, apellido } = req.body;
    
    
    connection.query('SELECT * FROM Usuario WHERE correo = ?', correo, (err, result) => {
        if (err) {
            console.error('Error al verificar el correo: ', err);
            res.status(500).json({ message: 'Error interno del servidor', state:false });
            return;
        }

        if (result.length > 0) {
           
            res.status(400).json({ message: 'El correo ya está registrado', state:false });
            return;
        }

       
        const newUser = { correo, contrasenia, nombre, apellido };
        connection.query('INSERT INTO Usuario SET ?', newUser, (err, result) => {
            if (err) {
                console.error('Error al registrar nuevo usuario: ', err);
                res.status(500).json({ message: 'Error interno del servidor', state:false });
                return;
            }

            res.status(200).json({ message: 'Usuario registrado correctamente', state:true });
        });
    });
};


module.exports = {
    register
}