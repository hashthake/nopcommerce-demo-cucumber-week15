Feature: Register

#  As a User I would like to register

 Scenario: verifyUserShouldNavigateToRegisterPageSuccessfully
    Given I am on homepage
    When I click on Register Link
    Then I can verify register text <"Register">

  Scenario: Verify That FirstName LastName Email Password And ConfirmPassword Fields Are Mandatory
    Given I am on homepage
    When I click on Register Link
    When I click register button
    Then I should verify first name is require "First name is required."
    And I should verify last name is require "Last name is required."
    And I should verify email is require "Email is required."
    And I should verify password is require "Password is required."
    And I should verify confirm password is require "Password is required."

    Scenario: verifyThatUserShouldCreateAccountSuccessfully
      Given I am on homepage
      When I click on Register Link
      Then I select gender Female
      And I enter firstname
      And I enter lastname
      And I select day,month,year
      And I enter email
      And I enter password
      And I enter confirm password
      Then I click on registerbutton
      And I verify message