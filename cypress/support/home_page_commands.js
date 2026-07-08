// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />

Cypress.Commands.add('accessRegisterPage', () => {
        cy.visit('/')
        cy.get('.fa-lock')
            .click()
        cy.get('.account_form > h3')
            .should('be.visible')
            .should('contain', 'Cadastro de usuário')
            .should('have.text', 'Cadastro de usuário')
})