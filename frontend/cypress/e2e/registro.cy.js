describe('Registro Test', () => {
    it('Debería de registrar un usuario y mostrar un mensaje de usario registrado exitoso', () => {
        cy.visit('http://localhost:5173/register')

        cy.wait(1000);
        cy.get('#fistName').type("Cypress6")
        cy.wait(1000);
        cy.get('[placeholder="Last Name"]').type("Analisis6")
        cy.wait(1000);
        cy.get('[type="email"]').type("prueba6@gmail.com")
        cy.wait(1000)
        cy.get('[type="password"]').type("123")
        cy.wait(1000)
        cy.get('#btnRegister').click()

        cy.wait(1000)
        cy.get('#swal2-title').should('have.text', "Registro Usuario!")
        cy.wait(1000)

        cy.get('.swal2-confirm').click()


    })
})