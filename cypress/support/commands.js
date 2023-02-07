// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
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

Cypress.Commands.add('scriptError', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // we expect a 3rd party library error with message 'list not defined'
        // and don't want to fail the test so we return false
        if (err.message.includes('Script error.')) {
          return false
        }
    })
})

Cypress.Commands.add('AlzaVisitPage', () => { 
        cy.visit('https://www.alza.sk/')
        cy.get('.js-cookies-info-accept').click()
       
    })


Cypress.Commands.add('login', (email, password) => { 
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('input[name=Email]').type(email)
        cy.get('input[name=Password]').type(password)
        cy.get('#Password').click()           
    })

