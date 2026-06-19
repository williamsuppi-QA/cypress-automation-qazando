describe("Cadastro de usuário", () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get('.fa-lock')
            .click()
        cy.get('.account_form > h3')
            .should('be.visible')
            .should('contain', 'Cadastro de usuário')
            .should('have.text', 'Cadastro de usuário')
    })

    it("Verificar se está visível", () => {
        cy.get('.account_form > h3')
        .should('be.visible')
    })

    it("Validar campo nome vazio", () => {
        cy.get('#user')
            .click()
        cy.get('#btnRegister')
            .click()
        cy.get('#errorMessageFirstName')
            .should('contain', 'O campo nome deve ser prenchido')
    })

    it("Validar campo E-mail vazio", () => {
        cy.get('#user')
            .click()
            .type('William')
        cy.get('#email')
            .click()
        cy.get('#btnRegister')
            .click()
        cy.get('#errorMessageFirstName')
            .should('contain', 'O campo e-mail deve ser prenchido corretamente')
    })

    it("Validar campo Senha vazio", () => {
        cy.get('#user')
            .click()
            .type('William')
        cy.get('#email')
            .click()
            .type('william@email.com')
        cy.get('#btnRegister')
            .click()
        cy.get('#errorMessageFirstName')
            .should('contain', 'O campo senha deve ter pelo menos 6 dígitos')
    })

    it("Validar campo Senha menos de 6 dígitos", () => {
        cy.get('#user')
            .click()
            .type('William')
        cy.get('#email')
            .click()
            .type('william@email.com')
        cy.get('#password')
            .click()
            .type('1234')
        cy.get('#btnRegister')
            .click()
        cy.get('#errorMessageFirstName')
            .should('contain', 'O campo senha deve ter pelo menos 6 dígitos')
    })

    it("Validar Cadastro Realizado com Sucesso", () => {
        cy.get('#user')
            .click()
            .type('William')
        cy.get('#email')
            .click()
            .type('william@email.com')
        cy.get('#password')
            .click()
            .type('123456')
        cy.get('#btnRegister')
            .click()
        cy.get('#swal2-title')
            .should('contain', 'Cadastro realizado!')
    })

})
