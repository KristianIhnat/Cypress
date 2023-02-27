/// <reference types="Cypress" />

describe('table2', () => {
    it('test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.get('#product.table-display tr td:nth-child(2)').each(($el, index, $list) => {
            //first we find exactly row in column
            const text=$el.text()
            if (text.includes('Master Selenium Automation in simple Python Language')) 
            {//then we want to search and get sibling(next) element
                cy.get('#product.table-display tr td:nth-child(2)').eq(index).next()
                .then(function(price) { // then we have to solve promise using then()
                    const priceText = price.text() //and then we can make assertion
                    expect(priceText).to.equal('25')
                })
            }
          })
    })
})