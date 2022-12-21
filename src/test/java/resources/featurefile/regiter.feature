@Regression
Feature: Login Test
  As user I want to login into nop-commerce-demo website


  @smoke
  Scenario: User verify Should Navigate To Register Page Successfully
    Given I click on Register Link
    When I verify On register page or not

  @sanity
  Scenario: User verify That FirstName LastName Email Password And Confirm Password Fields Are Mandatory
    Given I click on Register Link
    When I click Gender button
    And I Enter First Name"pradip"
    And I Last Name "kakadiya"
#    And I click day of birth
#    And I click month of birth
#    And I click year of birth
    And I Enter register emailid "pradip123@gmail.com"
    And I Enter register password "pradip123"
    And I Enter register Confirm password "pradip123"
    Then I Click Register button

