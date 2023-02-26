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

        // if element contains attribute 'target' that means, new page will
        // be open in new window. When page is open on new window, cypress cant
        // handle it and cant continue do tests. Therefore we want to remove
        // attribute 'target' and open new window on current page
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        cy.url().should('eq', 'https://www.rahulshettyacademy.com/')
        
        cy.go('back')
    })
})