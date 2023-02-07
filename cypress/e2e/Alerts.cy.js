/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // we expect a 3rd party library error with message 'list not defined'
    // and don't want to fail the test so we return false
    if (err.message.includes('angular is not defined')) {
      return false
    }
    // we still want to ensure there are no other unexpected
    // errors, so we let them fail the test
  })

  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Script error.')) {
      return false
    }
  })


describe('Suite Name', function (){
    it('Alerts', function (){

        cy.visit('http://register.rediff.com/register/register.php?FormName=user_details')


        cy.get('input[type=submit]').click()
          cy.on('window:alert', (str) => {
            expect(str).to.equal('Your full name cannot be blank.\nPlease enter your firstname and lastname e.g. Sameer Bhagwat')
            // \n = Insert a newline in the text at this point.
            //if is it confirmation alert we used event 'window:confirm'
          })

    })         
})
