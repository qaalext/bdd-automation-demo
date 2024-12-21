@productDetails
Feature: View Product Details

    Scenario: Display product name
        Given I am logged in and on the inventory page
        When I select the product "Sauce Labs Backpack"
        Then The product name should be "Sauce Labs Backpack"

    Scenario: Display product description
        Given I am logged in and on the inventory page
        When I select the product "Sauce Labs Backpack"
        Then The product description should contain "laptop and tablet protection"

    Scenario: Display product price
        Given I am logged in and on the inventory page
        When I select the product "Sauce Labs Backpack"
        Then The product price should be "$29.99"

    Scenario: Display product image
        Given I am logged in and on the inventory page
        When I select the product "Sauce Labs Backpack"
        Then The product image should be displayed and have the correct src

    Scenario: Display the "add to cart" button
        Given I am logged in and on the inventory page
        When I select the product "Sauce Labs Backpack"
        Then The add to cart button should be displayed