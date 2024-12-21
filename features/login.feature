@login
Feature: Login Action

    Scenario: Login with valid credentials
        Given I am on the login page
        When I login with "STANDARD_USERNAME" and "STANDARD_PASSWORD"
        Then I should see the inventory page
    
    Scenario: Login with invalid credentials
        Given I am on the login page
        When I login with "INVALID_USERNAME" and "INVALID_PASSWORD"
        Then I should receive an error message

    Scenario Outline: Try to login with all the accounts available
        Given I am on the login page
        When I login with <username> and <password>
        Then I should see the inventory page

        Examples:
            | username | password   |
            | "STANDARD_USERNAME"   | "STANDARD_PASSWORD" |
            | "LOCKED_OUT_USERNAME"   | "STANDARD_PASSWORD" |
            | "VISUAL_USERNAME"       | "STANDARD_PASSWORD" |