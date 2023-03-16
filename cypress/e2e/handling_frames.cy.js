/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('frame_tests', () => {
    it('test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href='mentorship']").eq(0).click()
        //geting error, I dont know why
        cy.iframe().find(".pricing-title").should('have.length', 2)
    })
})