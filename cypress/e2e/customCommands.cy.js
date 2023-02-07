/// <reference types="Cypress" />

describe('customCommands', () => {
    it('commandsTest', function () {
        cy.scriptError()
        cy.AlzaVisitPage()
    })
})
