/// <reference types="Cypress" />

describe('checkBoxes', () => {
    it('test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //checkboxex
        cy.get('#checkBoxOption1').check().should('be.checked')
          .and('have.value', 'option1')

        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        //Static dropdown
        cy.get('#dropdown-class-example').select('option2')
          .should('have.value', 'option2')

        //Dynamic dropdow
        cy.get('#autocomplete').type('ind')  

        cy.get('.ui-menu-item div')
          .each(($el, index, $list) => {
            if($el.text()==="India") {
                cy.wrap($el).click()
            }
          
        })

        cy.get('#autocomplete').should('have.value', 'India')
    })
})