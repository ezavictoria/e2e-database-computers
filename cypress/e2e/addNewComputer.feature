Feature: Adding new computers to the database

    Background: Access the computer database
        Given that the user accesses the home page

    Scenario: Adding a computer with valid data
        And clicks on the add button
        When fills the form with valid data
        And clicks on the create button
        Then the alert message should be displayed
        And the computer must be save in the database

    Scenario: Adding a computer with invalid data
        And clicks on the add button
        When fills the form with invalid data
        And clicks on the create button
        Then the error messages should be displayed