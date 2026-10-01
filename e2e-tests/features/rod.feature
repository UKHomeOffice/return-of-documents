@RodRegression
@RodRegressionCI
Feature: ROD - Return of documents

  Background:
    Given Test data has been created for "ROD" scenarios


  Scenario Outline: MainForm-Rod- E2E
    Given I selected the data for scenario "<Scenario ID>" - "<Description>"
    When  I visit the get your documents back page
    And  I fill out my answers for main form
    Then application should be successfully submitted
    Examples:
      | Scenario ID | Description                              |
      | 1           | The main applicant                       |
      | 2           | A sponsor                                |
      | 3           | A dependant or a guardian of a dependant |
      | 4           | A legal representative                   |


  Scenario Outline: MainForm-No BritishCitizenship Or EUSS- Rod- E2E
    Given I selected the data for scenario "<Scenario ID>" - "<Description>"
    When  I visit the get your documents back page
    And  I fill out my answers for main form except application for BritishCitizenship or EUSS and not requesting return of passport for travel
    Then I should see page proof of validation only
    Examples:
      | Scenario ID | Description                                                        |
      | 5           | Non BritishCitizenship and EUSS visa type applicant- Legal Rep     |
      | 6           | Non BritishCitizenship and EUSS visa type applicant- MainApplicant |


  Scenario Outline: Documents not received-Rod- E2E
    Given I selected the data for scenario "<Scenario ID>" - "<Description>"
    When  I visit report that you have not received your documents page
    And  I fill out my answers for documents not received form and submit application
    Then I should see application submitted for documents not received 
    Examples:
      | Scenario ID | Description                                                                         |
      | 7           | DNR- British citizenship                                                            |
      | 8           | DNR- A visa                                                                         |
      | 9           | DNR- Further leave to remain                                                        |
      | 10          | DNR- Settled or pre-settled status under the European Union Settlement Scheme       |
      | 11          | DNR -Transfer of conditions or limited leave replacement biometric residence permit |



  Scenario Outline: Cancel your request-Rod- E2E
    Given I selected the data for scenario "<Scenario ID>" - "<Description>"
    When  I visit cancel your request page
    And  I fill out my answers for cancel your request form and submit application
    Then I should see application submitted for cancel your request
    Examples:
      | Scenario ID | Description                                |
      | 12          | CR- The main applicant                     |
      | 13          | CR- A legal representative                 |
      | 14          | CR- A sponsor                              |
      | 15          | CR- A dependant or guardian of a dependant |
      | 16          | CR- A sponsor- UAN                         |



  Scenario: Validations Test: Cancel your request - Main Applicant details page
    Given   I visit cancel your request page
    When    I fill in main applicant's details with below details and validate
      | Full name              | FN       |
      | Date of birth          | 01/01/01 |
      | Country of nationality |          |
    Then I should see "There is a problem" error message displayed on applicant details page on cancel your request form