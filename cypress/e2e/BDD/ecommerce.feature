Feature: ecommerce end to end validation

    Feature Description

    Scenario: Ecommerce product delivery
    Given I open Ecommerce page
    When I add items to cart
    And Validate the total price
    Then Select the country and validate alert message

    Scenario: Filling the form to shop
    Given I open Ecommerce page
    When I fill the form details
        |name | gender|
        |bob  | Male  |    
    Then Validate the form behaviour
    And Select the shop page

