/// <reference types="Cypress" />

describe('customCommands', () => {
    it('commandsTest', function () {
        cy.login('admin@yourstore.com', 'admin')
    })
})