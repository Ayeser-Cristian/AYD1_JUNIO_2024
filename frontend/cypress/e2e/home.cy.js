describe('Home Test', () => {
    it('Debería iniciar sesión de forma correcta y dirigirse a registro', () => {
        cy.visit('http://localhost:5173/login')

        cy.wait(1000)
        cy.get('#email').type("correo@gmail.com")
        cy.wait(1000)
        cy.get('#password').type("123")
        cy.wait(1000)
        cy.get('form').submit();
        cy.wait(1000)
        cy.contains('Inicio de sesión!').should('be.visible');
        cy.wait(1000)
        cy.get('.swal2-confirm').click()

        cy.url().should('include','/home')

        cy.wait(2000)

        cy.get(':nth-child(2) > a').click()
        cy.url().should('include', '/register')


    })
})