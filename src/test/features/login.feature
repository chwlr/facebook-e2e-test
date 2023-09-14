Feature: User Authentication tests

  Background: 
    Given User navigates to facebook

  Scenario: Login should be success
    And User login with valid credentials
    Then Login should be success
  
  Scenario: Login should not be success
    And User login with invalid credentials
    Then Login should not be success