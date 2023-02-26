/// <reference types="Cypress" />

describe('checkBoxes', () => {
    it('test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        //we have several browser events and when we want to do some assertion on events
        //e.g for alert (window:alert)
        cy.on('window:alert', (str) => {
            //we use commands from Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str) => {
            //we use commands from Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})