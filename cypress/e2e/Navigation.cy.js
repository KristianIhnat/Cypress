/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // we expect a 3rd party library error with message 'list not defined'
    // and don't want to fail the test so we return false
    if (err.message.includes('Script error.')) {
      return false
    }
})

describe('My First Test', () => {
    it('Navigation test', () => {
      cy.visit('https://www.alza.sk/')
      
      //cookies or reklama is thrown and we want to close it
      cy.wait(5000)    
      cy.get('.js-cookies-info-accept').click()  

      cy.title().should('eq', 'Alza.sk – rýchly a pohodlný nákup odkiaľkoľvek | Alza.sk') //home
      
      cy.get("a[href='https://www.alza.sk/pre-firmy']").contains('Pre firmy').click() //pre firmy
      cy.title().should('eq', 'Alza pre firmy | Alza.sk')

      cy.go(-1)
      cy.title().should('eq', 'Alza.sk – rýchly a pohodlný nákup odkiaľkoľvek | Alza.sk')

      cy.go(1)
      cy.title().should('eq', 'Alza pre firmy | Alza.sk')

      cy.reload()
    })
  })
