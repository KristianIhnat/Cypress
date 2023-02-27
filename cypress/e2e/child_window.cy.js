/// <reference types="Cypress" />

describe('checkBoxes', () => {
    it('test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(function(el) {
            const url=el.prop('href')
            cy.visit(url)
        })
    })
})