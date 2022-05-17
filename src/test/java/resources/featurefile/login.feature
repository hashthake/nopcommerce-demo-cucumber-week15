Feature: Login Test
  As a User I like to login to nop commerce website

  Scenario: User should navigate to login page successfully
    Given I am on homepage
    When I click on login link
    Then I should navigate to login page successfully

  Scenario: verifyTheErrorMessageWithinValidCredentials
    Given I am on homepage
    When I click on login link
    And I enter emailid
    And I enter passwordfield
    Then I click on login button
    And I verify the error message

  Scenario: verifyThatUserShouldLoginSuccessFullyWithValidCredentials
    Given I am on homepage
    When I click on login link
    And I enter emailidfield
    And I enter passwordfieldwithvalidpassword
    Then I click on login button
    And I verify that logout link is on display

  Scenario: verifyThatUserShouldLogOutSuccessfully
    Given I am on homepage
    When I click on login link
    And I enter emailidfield
    And I enter passwordfieldwithvalidpassword
    And I click on login button
    Then I click on logout link
    And I able to see login link display