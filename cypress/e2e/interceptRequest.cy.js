/// <reference types="Cypress" />

describe('firstIntercept', () => {
    it('test', function () {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
        //we change=shetty to malhotra
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        //we take our req and change(mock) =shetty to =malhotra
        (req)=>
        {
        req.ulr='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
        
        req.continue((res)=>
        {//we do assertion that user does not have credentials(403)
            expect(res.statusCode).to.equal(403)
        })
        }).as("dummyUrl")

        cy.get('.btn btn-primary').click()

        cy.wait('@dummyUrl')
    })
})