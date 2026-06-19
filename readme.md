# 🌲 Cypress - Automação de Cadastro de Usuário

Projeto de testes automatizados desenvolvido com Cypress, cobrindo os principais cenários de cadastro de usuário no site [Automation Pratice](https://automationpratice.com.br) da Qazando.

## 🎯 Objetivo

Validar o fluxo de cadastro de usuário, garantindo que os campos obrigatórios sejam corretamente validados e que o cadastro seja realizado com sucesso quando os dados são preenchidos corretamente.

## 🧪 Cenários Testados

| Cenário | Status |
|---|---|
| Verificar se o formulário está visível | ✅ |
| Validar campo nome vazio | ✅ |
| Validar campo e-mail vazio | ✅ |
| Validar campo senha vazio | ✅ |
| Validar senha com menos de 6 dígitos | ✅ |
| Validar cadastro realizado com sucesso | ✅ |

## 🛠️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- JavaScript
- Node.js

## 📁 Estrutura do Projeto


cypress-automation/ ├── cypress/ │ └── e2e/ │ └── desafio-v2.cy.js ├── cypress.config.js ├── package.json ├── .gitignore └── README.md

## ▶️ Como Executar

Clone o repositório:


Bash
git clone https://github.com/williamsuppi-QA/cypress-automation-qazando.git




Instale as dependências:


Bash
npm install




Execute os testes no modo interativo:


Bash
npx cypress open




Execute os testes no modo headless:


Bash
npx cypress run




## 👤 Autor

William Morais Suppi
[LinkedIn](https://www.linkedin.com/in/william-morais-suppi) | [GitHub](https://github.com/williamsuppi-QA)

## 📌 Observações

Projeto desenvolvido como parte dos estudos em automação de testes com Cypress, utilizando o ambiente de prática disponibilizado pela [Qazando](https://qazando.com.br).



