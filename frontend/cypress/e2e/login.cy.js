describe('Login Test', () => {
  it('Debería iniciar sesión de forma correcta y mostrar un mensaje de bienvenida', () => {
    cy.visit('http://localhost:5173/login')

    cy.wait(1000)
    cy.get('#email').type("analisis@gmail.com")
    cy.wait(1000)
    cy.get('#password').type("123")
    cy.wait(1000)
    cy.get('form').submit();

    //Lo que esperemoas que nos responda la aplicación

    cy.contains('Inicio de sesión!').should('be.visible');

  })
})