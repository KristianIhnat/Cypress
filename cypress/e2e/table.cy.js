/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // we expect a 3rd party library error with message 'list not defined'
    // and don't want to fail the test so we return false
    if (err.message.includes('Script error.')) {
      return false
    }
})

describe('tes suite table', () => {
    it('Table test', () => {
        cy.visit('https://www.alza.sk/')
      
        //cookies or reklama is thrown and we want to close it
        cy.get('.js-cookies-info-accept').click()  

        cy.get('.ui-autocomplete-input').type('AMD Ryzen 7 5800X')
        cy.get('#btnSearch').click()
        cy.get('.close').last().click()

        cy.get('#img6205103').click()

        //checking specific elemnet on table (div)
        cy.get('.js-top-parameters').contains('div.name.typeName.first', 'Modelové označenie').should('be.visible')

        cy.get('div.groupValues.js-top-parameters > div:nth-child(4)').contains('Mikroarchitektúra').should('be.visible')

        })
    })


        //verify the book name 'Master in Java' whose author is 'Amod'

        //cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').each(($element,index,$list) => {
//             const text = $element.text()
//             if(text.includes("Amod"))
//             {
//                 cy.get('table[name=BookTable]>tbody>tr td:nth-child(1)').eq(index).then(function(bname)
//                 {
//                     const bookName=bname.text()
//                     expect(bookName).to.equal("Master in Java")
//                 })
//             }
//         })