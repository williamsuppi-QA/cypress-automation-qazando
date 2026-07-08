import { faker } from '@faker-js/faker';
import home_page from '../support/pages/home_page'
import register_page from '../support/pages/register_page'

const user_data = {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 6 })
}

describe("Cadastro de usuário", () => {

    beforeEach(() => {
        home_page.accessRegisterPage()
    })


    it("Validar campo nome vazio", () => {
        register_page.saveRegister()
        register_page.checkMessage('O campo nome deve ser prenchido')
    })

    it("Validar campo E-mail vazio", () => {
        register_page.fillName(user_data.name)
        register_page.saveRegister()
        register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it("Validar campo E-mail inválido", () => {
        register_page.fillName(user_data.name)
        register_page.fillEmail('emailinvalido')
        register_page.saveRegister()
        register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it("Validar campo Senha vazio", () => {
        register_page.fillName(user_data.name)
        register_page.fillEmail(user_data.email)
        register_page.saveRegister()
        register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it("Validar campo Senha menos de 6 dígitos", () => {
        register_page.fillName(user_data.name)
        register_page.fillEmail(user_data.email)
        register_page.fillPassword('1234')
        register_page.saveRegister()
        register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it("Validar Cadastro Realizado com Sucesso", () => {
        register_page.fillName(user_data.name)
        register_page.fillEmail(user_data.email)
        register_page.fillPassword(user_data.password)
        register_page.saveRegister()
        register_page.checkRegisterSuccess('Cadastro realizado!')
    })

})