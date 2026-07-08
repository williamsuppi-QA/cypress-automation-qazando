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
export default {
saveRegister() {
    cy.get(elements.buttons.btnRegister)
        .click()
},
    
fillEmail(email) {
    cy.get(elements.fields.email)
        .should('be.visible')
        .type(email)
}, 

fillName(name) {
    cy.get(elements.fields.name)
        .type(name)

},

fillPassword(password) {
    cy.get(elements.fields.password)
            .should('be.visible')
            .type(password)
        
},

checkMessage(message) {
    cy.get(elements.messages.errorLabel)
            .should('have.text', message)
            
},

checkRegisterSuccess(swal2title) {
    cy.get(elements.messages.swal2Title)
            .should('have.text', swal2title)
            
},
}

