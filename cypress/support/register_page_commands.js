/// <reference types="cypress" />

// Elementos
const elements = {
    buttons: {
    btnRegister: '#btnRegister'
    },
    fields: {
        email: '#email',
        name: '#user',
        password: '#password'
    },
    messages: {
        errorLabel: '.errorLabel',
        swal2Title: '#swal2-title'
    } 
}

// Ações/métodos/funções

Cypress.Commands.add('saveRegister', () => {
    cy.get(elements.buttons.btnRegister)
        .click()
})

Cypress.Commands.add('fillEmail', (email) => {
    cy.get(elements.fields.email)
        .should('be.visible')
        .type(email)
})

Cypress.Commands.add('fillName', (name) => {
    cy.get(elements.fields.name)
        .type(name)
})

Cypress.Commands.add('fillPassword', (password) => {
    cy.get(elements.fields.password)
            .should('be.visible')
            .type(password)
        
})

Cypress.Commands.add('checkMessage', (message) => {
    cy.get(elements.messages.errorLabel)
            .should('have.text', message)
            
})

Cypress.Commands.add('checkRegisterSuccess', (swal2title) => {
    cy.get(elements.messages.swal2Title)
            .should('have.text', swal2title)
            
})