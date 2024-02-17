# Automated Testing for Computer Database Application
This repository contains an automation project using Cypress and Cucumber for testing a computer database application.

## Running the Tests
To execute the tests, use the following command in the terminal:
```bash
npm run test
```

## Test Observations
After successfully adding a computer, it fails to appear in the list, resulting in the first test failure.

## Detailed Analysis
The testing process encompassed the creation, error messages, field validations, and searching the computer database listing in two scenarios. However, a notable inconsistency emerged between the reported success message and the actual presence of the computer in the database, ultimately leading to the test failure.

## Identified Issues
The primary issue revolves around the disparity between the reported success message and the absence of the computer in the database listing.

## Recommendations
To enhance test coverage, it is advised to investigate the synchronization between the add operation and the database update. Particular attention should be given to the mechanisms responsible for updating the computer listing.

## Comments
The testing approach aimed at validating crucial aspects of the application, including creation, error handling, and field validation. A thorough examination of the computer database listing was conducted across different scenarios to ensure comprehensive testing.
