/// <reference types="Cypress" />

describe('UI Elements', () => {
    it('Verify input and radio buttons', () => {
        cy.visit("https://demo.guru99.com/test/newtours/index.php")//visit URL
        cy.url().should('include', 'demo')
        cy.wait(5000)
        //cookies or reklama is thrown and we want to close it
        .then(() =>{
            cy.wrap(
                window.top.document.querySelector('#save'),
                ).click({force: true})
        })
        cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("Jozo")
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("feroslav")
        cy.get('input[name=submit]').should('be.visible').click()
        cy.get(':nth-child(2) > [width="80"] > a').href
        cy.visit("https://demo.guru99.com/test/newtours/reservation.php")        

        //Radion buttons
        cy.get('input[value=roundtrip]').should('be.checked')
        cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click()

        //title verification
        cy.get('eq', 'Find a Flights: Mercury tours:')
    })
})