describe('Login Incorrecto Test', () => {
    it('Debería de ingresar datos incorrectos en el login y mostrar un mensaje de Error', () => {
        cy.visit('http://localhost:5173/login')

        cy.wait(1000)
        cy.get('#email').type("analisis@gmail.com")
        cy.wait(1000)
        cy.get('#password').type("1233")
        cy.wait(1000)
        cy.get('form').submit();

        //Lo que esperemoas que nos responda la aplicación
        cy.wait(2000)
        cy.contains('Error!').should('be.visible');
        cy.wait(1000)
        cy.get('.swal2-confirm').click()

    })
})