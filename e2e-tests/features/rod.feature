@RodRegression
@RodRegressionCI
Feature: ROD - Return of documents

  Scenario Outline: E2E test for return of documents pertaining to "<Description>"
    Given I visit the get your documents back page
    When I fill out my answers for main form pertaining to "<Description>"
    Then application should be successfully submitted
    Examples:
      | Description                              |
      | The main applicant                       |
      | A sponsor                                |
      | A dependant or a guardian of a dependant |
      | A legal representative                   |


  Scenario Outline: verify that the form behaves correctly for British Citizenship or EUSS for not requesting return of passport for travel pertaining to "<Description>"
    Given I visit the get your documents back page
    When I fill out my answers for main form except application for British Citizenship or EUSS and not requesting return of passport for travel pertaining to "<Description>"
    Then I should see page proof of validation only
    Examples:
      | Description                                                        |
      | Non BritishCitizenship and EUSS visa type applicant- Legal Rep     |
      | Non BritishCitizenship and EUSS visa type applicant- MainApplicant |


  Scenario Outline: Verify that the form behaves correctly for reporting documents not received pertaining to "<Description>"
    Given I visit report that you have not received your documents page
    When I fill out my answers for documents not received form and submit application pertaining to "<Description>"
    Then I should see application submitted for documents not received
    Examples:
      | Description                                                                         |
      | DNR- British citizenship                                                            |
      | DNR- A visa                                                                         |
      | DNR- Further leave to remain                                                        |
      | DNR- Settled or pre-settled status under the European Union Settlement Scheme       |
      | DNR -Transfer of conditions or limited leave replacement biometric residence permit |


  Scenario Outline: E2E test for documents not received form pertaining to "<Description>"
    Given I visit cancel your request page
    When I fill out my answers for cancel your request form and submit application pertaining to "<Description>"
    Then I should see application submitted for cancel your request
    Examples:
      | Description                                |
      | CR- The main applicant                     |
      | CR- A legal representative                 |
      | CR- A sponsor                              |
      | CR- A dependant or guardian of a dependant |
      | CR- A sponsor- UAN                         |


  Scenario: Cancel your request - main applicant details validation
    Given I visit cancel your request page
    When I fill in main applicant's details with below details and validate
      | Full name              | FN       |
      | Date of birth          | 01/01/01 |
      | Country of nationality |          |
    Then I should see "There is a problem" error message displayed on applicant details page on cancel your request form