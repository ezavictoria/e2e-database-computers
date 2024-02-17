import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import addNewComputerElements from "../elements/addNewComputerElements";
const AddNewComputerElements = new addNewComputerElements()

/* Given Steps */
Given("that the user accesses the home page", () => {
    cy.visit(AddNewComputerElements.homePageUrl())
  });

Given("clicks on the add button", () => {
    cy.get(AddNewComputerElements.addButton()).click()
})

/* When Steps */
When("fills the form with valid data", () => {
    cy.get(AddNewComputerElements.nameField()).type('Computer EZA')
    cy.get(AddNewComputerElements.introducedField()).type('2020-12-31')
    cy.get(AddNewComputerElements.discontinuedField()).type('2023-12-31')
    cy.get(AddNewComputerElements.companyDropdown()).select('ASUS')
})

When("fills the form with invalid data", () => {
    cy.get(AddNewComputerElements.introducedField()).type('2020-12')
    cy.get(AddNewComputerElements.discontinuedField()).type('12-31')
})

When("clicks on the create button", () => {
    cy.get(AddNewComputerElements.createButton()).click()
})

/* When Steps */
Then("the alert message should be displayed", () => {
    cy.get(AddNewComputerElements.alertMsg()).should('contain', 'Computer Computer EZA has been created')
})

Then("the computer must be save in the database", () => {
    cy.get(AddNewComputerElements.searchBox()).type('Computer EZA')
    cy.get(AddNewComputerElements.searchButton()).click()
    cy.get(AddNewComputerElements.computersTable()).should('contain', 'Computer EZA')
})

Then("the error messages should be displayed", () => {
    cy.get(AddNewComputerElements.errorMsg()).first().should('contain', 'Failed to refine type')
    cy.get(AddNewComputerElements.errorMsg()).eq(1).should('contain', 'Failed to decode date')
    cy.get(AddNewComputerElements.errorMsg()).last().should('contain', 'Failed to decode date')
})


