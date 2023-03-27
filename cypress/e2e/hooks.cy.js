/// <reference types="Cypress" />
import HomePage from './PageObjects/homePage'
import ProductPage from './PageObjects/productPage'

describe('hooks', () => {
      before(() => {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })
    it('fixturesDemo', function() {
        const homePage= new HomePage()
        const productPage= new ProductPage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDatabinding().should('have.value', this.data.name)
        //when need to check specific attribute (minlength) if contains specifiv valeu (2)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneur().should('be.disabled')
        homePage.getShopTab().click()
        //when we want to search for more products instead of repeating, we can use
        //forEach function for getting alls product from array
        //selectProduct is our command, productName is in example.json
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        })

        productPage.checkoutButton().click()
        productPage.checkoutButton2().click()
        productPage.typeCountry().type('Slovakia')
        cy.wait(5000)
        cy.get('.suggestions > ul > li > a').click()
        cy.get('.checkbox > label').click()
        cy.get('.ng-untouched > .btn').click()
        cy.get('.alert').contains('Success! Thank you! Your order will be delivered in next few weeks :-).')
    })  
})