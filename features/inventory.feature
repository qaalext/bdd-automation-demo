@inventory
Feature: Inventory action
    
    Scenario: Select an inventory item
        Given I am logged in and on the inventory page
        When I select the product "Sauce Labs Backpack"
        Then I should be redirected to the product details page
    
    Scenario: Add an item to the shopping cart
        Given I am logged in and on the inventory page
        When i add the product "Sauce Labs Backpack" to the shopping cart
        Then The shopping cart should display a badge indicating that an item was added
