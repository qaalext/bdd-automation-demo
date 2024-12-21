@shoppingCart
Feature: View Products in the Shopping Cart

    Scenario: Display product name in the shopping cart
        Given I am logged in and on the inventory page
        When i add the product "Sauce Labs Backpack" to the shopping cart
        Then The product name from the shopping cart should be "Sauce Labs Backpack"

    Scenario: Display product price in the shopping cart
        Given I am logged in and on the inventory page
        When i add the product "Sauce Labs Backpack" to the shopping cart
        Then The product price of the product "Sauce Labs Backpack" should be "$29.99"

    Scenario: Display the checkout button for product in the shopping cart
        Given I am logged in and on the inventory page
        When i add the product "Sauce Labs Backpack" to the shopping cart
        Then The checkout button is displayed for the item in the shopping cart