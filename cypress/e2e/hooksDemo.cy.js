/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // we expect a 3rd party library error with message 'list not defined'
    // and don't want to fail the test so we return false
    if (err.message.includes('Script error.')) {
      return false
    }
})

describe('Test suite', () => {
    //run once before all test in the block
    before(() => {
        cy.log('this is set up block')
    })
    //run once after all test in the block
    after(() => {
        cy.log('this is quit block')
    })
    //run before each test in block
    beforeEach(() => { 
        cy.log('this is log in block')
    })
    //run after each test in block
    afterEach(() => { 
        cy.log('this is log out block')
    })
    
    it('searching', () => {
        cy.log('this is searching test')
    })

    it('advenced searching', () => {
        cy.log('this is advenced searching test')
    })

    it('listing products', () => {
        cy.log('this is listing products test')
    })
})

