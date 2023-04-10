/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

import HomePage from '../../PageObjects/homePage'
import ProductPage from '../../PageObjects/productPage'

const homePage= new HomePage()
const productPage= new ProductPage()
let name

Given ('I open Ecommerce page', () =>
{
    cy.visit(Cypress.env('url')+'/angularpractice/')
})

When('I add items to cart',function ()
{
    homePage.getShopTab().click()



this.data.productName.forEach(function(element) {
 
    cy.selectProduct(element)
  });
  productPage.checkoutButton().click()
})

When ('Validate the total price', ()=>
{
    var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            const adjustText = $el.text()
            //We have to remove specific symbol and space
            //When we use var we can re-use this variable
            var result = adjustText.split(" ")
            result = result[1].trim()
            //Number() change string to number
            sum=Number(sum)+Number(result)
            //We have to solve promise
        }).then(function(){
            cy.log(sum)
        })
        
        //Now we compare values
        cy.get('h3 > strong').each(($el, index, $list) => {
            const adjustText = $el.text()
            var result = adjustText.split(" ")
            result = result[1].trim()
            expect(Number(result)).to.equal(Number(sum))
        })
})

Then ('Select the country and validate alert message', ()=>
{
    productPage.checkoutButton2().click()
        productPage.typeCountry().type('Slovakia')
        cy.wait(5000)
        cy.get('.suggestions > ul > li > a').click()
        cy.get('.checkbox > label').click()
        cy.get('.ng-untouched > .btn').click()
        cy.get('.alert').contains('Success! Thank you! Your order will be delivered in next few weeks :-).')
        //another option
        cy.get('.alert').then(function(el){
            const actualText = el.text()
            expect(actualText.includes("Success! Thank you! Your order will be delivered in next few weeks"))
            .to.be.true
        })
})
//what we use in fixtures files we call these data with dataTable
When('I fill the form details', (dataTable)=>
{
    //function rawTable change our data to multi dimensional array
    //from our feature file, first we choose raw [0], second we choose index [1]
    //[[name, gender],[bob, male]]
    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getGender().select(dataTable.rawTable[1][1])
})

Then('Validate the form behaviour', ()=>
{
    homePage.getTwoWayDatabinding().should('have.value', name)
    //when need to check specific attribute (minlength) if contains specifiv valeu (2)
    homePage.getEditBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepreneur().should('be.disabled')
})

Then('Select the shop page', ()=>
{
    homePage.getShopTab().click()
})