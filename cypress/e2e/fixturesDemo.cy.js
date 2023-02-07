/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // we expect a 3rd party library error with message 'list not defined'
    // and don't want to fail the test so we return false
    if (err.message.includes('Script error.')) {
      return false
    }
})

describe('Test suite', () => {
    beforeEach(() => {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('fixturesDemo', function () {
        cy.visit('https://www.alza.sk/')
        cy.get('.js-cookies-info-accept').click()
        cy.get('#edtSearch').type(this.data.email).type(this.data.password)
    })
})

