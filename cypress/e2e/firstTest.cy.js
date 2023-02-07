describe('My First Test', () => {
    it('Verify title of the page', () => {
      cy.visit('https://demo.nopcommerce.com/')
      cy.title().should('eq', 'nopCommerce demo store')
    })
  })