# 🌲 Cypress - Automação de Cadastro de Usuário

Projeto de testes automatizados desenvolvido com Cypress, cobrindo os principais 
cenários de cadastro de usuário no site Automation Practice da Qazando.

## 🎯 Objetivo

Validar o fluxo de cadastro de usuário, garantindo que os campos obrigatórios sejam 
corretamente validados e que o cadastro seja realizado com sucesso quando os dados 
são preenchidos corretamente.

## 🧪 Cenários Testados

| Cenário | Status |
|---|---|
| Validar campo nome vazio | ✅ |
| Validar campo e-mail vazio | ✅ |
| Validar campo e-mail inválido | ✅ |
| Validar campo senha vazio | ✅ |
| Validar senha com menos de 6 dígitos | ✅ |
| Validar cadastro realizado com sucesso | ✅ |

## 🛠️ Tecnologias Utilizadas

- Cypress
- JavaScript
- Node.js
- Faker.js

## 📁 Estrutura do Projeto
cypress-automation/ ├── cypress/ │ ├── e2e/ │ │ └── desafio-v3.cy.js │ └── support/ │ └── pages/ │ ├── home_page.js │ └── register_page.js ├── cypress.config.js ├── package.json ├── .gitignore └── README.md

## ▶️ Como Executar

Clone o repositório:

bash

git clone https://github.com/williamsuppi-QA/cypress-automation-qazando.git


Instale as dependências:

bash

npm install


Execute os testes no modo interativo:

bash

npx cypress open


Execute os testes no modo headless:

bash

npx cypress run


## 👤 Autor

William Morais Suppi
[LinkedIn](https://www.linkedin.com/in/william-morais-suppi/) | [GitHub](https://github.com/williamsuppi-QA)

## 📌 Observações

Projeto desenvolvido como parte dos estudos em automação de testes com Cypress, 
utilizando o ambiente de prática disponibilizado pela Qazando.

Nesta versão foi aplicado o padrão **Page Object Model (POM)**, separando 
responsabilidades entre os arquivos de página e o arquivo de testes, além da 
integração com **Faker.js** para geração de dados dinâmicos a cada execução.

