/// <reference types="Cypress" />

describe('example2', () => {
    it('example_2', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        
        cy.get('.search-keyword')
          .type('ca')

        //Find element based on eq=2 
        cy.get('.products .product')
          .should('have.length', 4)
          .eq(2)
          .contains('ADD TO CART')
          .click()

        //Find element using each. It is similar as for loop, we are looking
        //for each 4 elements ($el) and when we find element wich has h4.product-name 
        //include 'Cashew', we click on it
        cy.get('.products .product')
          .each(($el, index, $list) => {
             const textVegetables = $el.find('h4.product-name').text()
             if(textVegetables.includes('Cashew'))
             {
                cy.wrap($el).find('button').click()
             }
        })

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
  })