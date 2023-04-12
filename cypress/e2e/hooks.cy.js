/// <reference types="Cypress" />
import HomePage from './PageObjects/homePage'
import ProductPage from './PageObjects/productPage'
//just test
describe('hooks', () => {
      before(() => {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })
    it('fixturesDemo', function() {
       //larger timeout for this praticular spec
        Cypress.config('defaultCommandTimeout', 12000)
        const homePage= new HomePage()
        const productPage= new ProductPage()
        cy.visit(Cypress.env('url')+'/angularpractice/')
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
})
