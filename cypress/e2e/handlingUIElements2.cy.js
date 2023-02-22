/// <reference types='Cypress' />

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
    it('Hobbies check boxes', function (){

        cy.visit('https://demo.automationtesting.in/Register.html')

        cy.get('#checkbox1')
          .check()
          .should('be.checked')
          .and('have.value', 'Cricket')
        
        cy.get('#checkbox2')
          .check()
          .should('be.checked')
          .and('have.value', 'Movies')
          
        cy.get('#checkbox3').check().should('be.checked').and('have.value', 'Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        //shorter option for select multiple checkboxes
        cy.get('input[type=checkbox').check(['Cricket', 'Hockey', 'Movies'])
    })

   it('Skills Drop Down', () => {
       cy.get('#Skills').select('Android').should('have.value', 'Android')
   })      

//    it('Languages multi select', () => {
//     cy.get('#msdd').click()
//     cy.get('.ui-corner-all').contains('English').click()
//     cy.get('.ui-corner-all').contains('Japanese').click()

// })    

    it('Select country searchable drop down', () => {
        cy.get('[role=combobox]').click({force: true}) //if other window cover
        cy.get('.select2-search__field').type('Ind')
        cy.get('.select2-search__field').type('{enter}')

    })         

})
