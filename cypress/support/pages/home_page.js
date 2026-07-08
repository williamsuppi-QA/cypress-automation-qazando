/// <reference types="cypress" />

export default {
    accessRegisterPage() {
        cy.visit('/')
        cy.get('.fa-lock')
            .click()
        cy.get('.account_form > h3')
            .should('be.visible')
            .should('contain', 'Cadastro de usuário')
            .should('have.text', 'Cadastro de usuário')
    }
}