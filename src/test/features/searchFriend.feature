Feature: User search a friend on facebook tests

  Background: 
    Given User navigates to facebook

  Scenario: Search a friend
    And User login with valid credentials
    And User fill the search field with "Mark Zuckerberg"
    Then User found a friend on facebook