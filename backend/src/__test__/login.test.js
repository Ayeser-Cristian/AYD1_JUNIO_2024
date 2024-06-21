const request = require('supertest');
const connection = require('../db/conectiondb');
const app = require('../app')

describe('POST /Login', () => {
    it('Debería devolver un JSON, un mensaje exitoso y un estado 200', async () => {

        const response = await request(app)
            .post('/login')
            .send({ correo: 'correo@gmail.com', contrasenia: '123' });

        expect(response.body.message).toBe('Inicio de sesión exitoso');

        expect(response.body.usuario).toBeDefined();

        expect(response.status).toBe(200);
    })
    
    it('Debería de devolver un estado 401 y un mensaje de login incorrecto', async () => {

        const response = await request(app)
            .post('/login')
            .send({ correo: 'juan@gmail.com', contrasenia: 'clave1234' });

        expect(response.body.message).toBe('Nombre de usuario o contrasena incorrectos');
        expect(response.status).toBe(401);
    })
})

afterAll(async () => {
    
    await connection.end();

});
