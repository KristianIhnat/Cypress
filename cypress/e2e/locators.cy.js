/// <reference types="cypress" />

describe('Locating Elements', () => {
    it('Verify types of locators', () => {
        cy.visit("https://demo.nopcommerce.com/") //open URL
        cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch") //search box
        cy.get("[type='submit']").click() //click on search button
        cy.get(".product-box-add-to-cart-button").click() //add to cart
        cy.get("#product_enteredQuantity_4").clear().type("2") //quantity
        cy.get("#add-to-cart-button-4").click() //click on add to cart after quantity
        cy.wait(5000)//operacia trochu trva tak cakaj 5s
        cy.get("#topcartlink > a > span.cart-label").click() //shoping cart link
        cy.wait(3000)
        cy.get(".product-unit-price").contains('$1,800.00') //validating point
    })
})