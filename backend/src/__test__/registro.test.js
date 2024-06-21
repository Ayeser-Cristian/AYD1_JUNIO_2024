const request = require('supertest');
const connection = require('../db/conectiondb');
const app = require('../app')

describe('POST /Registro', () => {
    it('Debería devolver un mensaje exitoso y un estado 200', async () => {

        const nuevo = {
            correo: "correo@gmail.com",
            contrasenia: "123",
            nombre: "Luis",
            apellido: "Perez"
        }
        const response = await request(app)
            .post('/registro')
            .send(nuevo);


        if (response.body.message==='El correo ya está registrado'){
            expect(response.body.message).toBe('El correo ya está registrado');

            expect(response.status).toBe(400);
        }else{
            expect(response.body.message).toBe('Usuario registrado correctamente');
            expect(response.status).toBe(200);
        }
       
        
    })

})


afterAll(async () => {
    
    await connection.end();

});