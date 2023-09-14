Feature: User create post on facebook tests

  Background: 
    Given User navigates to facebook

  Scenario: Create new post
    And User login with valid credentials
    When User click Whats on your mind button
    And User fill the post field with "Hello this is automation test"
    And User click post button
    Then User create post success