/// <reference types="Cypress" />

describe('hooks', () => {
      before(() => {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })
    it('fixturesDemo', function() {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(1) > .form-control').type(this.data.name)
        cy.get('#exampleFormControlSelect1').select(this.data.gender)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
        //when need to check specific attribute (minlength) if contains specifiv valeu (2)
        cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2')
        cy.get('#inlineRadio3').should('be.disabled')
    }) 
})