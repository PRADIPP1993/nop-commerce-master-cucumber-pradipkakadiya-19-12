@Regression
Feature: Login Test
  As user I want to login into nop-commerce-demo website


  @smoke
  Scenario: User verify Should Navigate To LoginPage
    Given I click on login link
    When  I verify on login pages

  @sanity
  Scenario: User verify Error Message With Invalid Credentials
    Given I click on login link
    When I Enter invalid EmailId
    And I Enter invalid Password
    And I click on login button
    Then I Verify error mass

  @sanity
  Scenario: User verify That Should Log In SuccessFully With Valid Credentials
    Given I click on login link
    When I Enter valid EmailId
    And I Enter valid password
    And I click on login button
    Then I Verify Mass

  Scenario: User verify That Should LogOut SuccessFully
    Given I click on login link
    When I Enter valid EmailId
    And I Enter valid password
    And I click on login button
    And I click on logout link
    Then I verify logout or not







