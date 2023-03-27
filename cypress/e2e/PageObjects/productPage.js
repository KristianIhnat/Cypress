class ProductPage 
{
checkoutButton()
{
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
}

checkoutButton2()
{
    return cy.get(':nth-child(4) > :nth-child(5) > .btn')
}

typeCountry()
{
    return cy.get('#country')
}
}

export default ProductPage;