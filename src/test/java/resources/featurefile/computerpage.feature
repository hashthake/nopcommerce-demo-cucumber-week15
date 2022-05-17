Feature: computer page test

  As a user I would like to check functions of computer page

  Scenario: verifyUserShouldNavigateToComputerPageSuccessfully()
    Given I am on homepage
    When I click on computer tab
    Then I can check computer text display

  Scenario: verifyUserShouldNavigateToDesktopPageSuccessfully
    Given I am on homepage
    When I click on computer tab
    And I click on desktop link
    Then I can see Desktop Text

  Scenario Outline: verifyThatUserShouldBuildYourOwnComputerAndAddThemToCartSuccessfully
    Given I am on homepage
    When I click on computer tab
    And I click on desktop link
    And I click on build your own computer
    And I select processor "<processor>"
    And I select ram "<ram>"
    And I select hdd "<hdd>"
    And I select os "<os>"
    And I select software "<software>"
    And I click on add to cart button
    Then I am able to message

    Examples:
      | processor                                       | ram           | hdd               | os                      | software                   |
      | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]    | Microsoft Office [+$50.00] |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] | Vista Premium [+$60.00] | Acrobat Reader [+$10.00]   |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | Vista Home [+$50.00]    | Total Commander [+$5.00]   |


