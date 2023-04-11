/// <reference types="Cypress" />

describe('firstIntercept', () => {
    it('test', function () {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        //cy.intercept({request}, {response})
        cy.intercept({
            //request
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?Authorname=shetty'
        }, 
        {
            //response
            statusCode: 200,
            body: [{"book_name": "example",
                    "isbn": "RSU",
                    "aisle": '2301'
                    }]
        //we save our  mock as 
        }).as('bookRetrievals')

        cy.get('.btn btn-primary').click()
        //we wait for our mock and we do assertion if we recieve correct response
        cy.wait('@bookRetrievals').should(({request, response})=>
        {      //we want +1 because we alway recieve also header (1row)
            cy.get('tr').should('have.length', response.body.length+1)
        })
    })
})