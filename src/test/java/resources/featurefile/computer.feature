Feature: Computer Test
  As user I want to login into nop-commerce-demo website

  @Regression
  Scenario: User verify Should Navigate To Computer Page Successfully
    Given I click on Menuteb computers
    When I verify on computer page


  @Regression
  Scenario: User verify Should Navigate To Desktops Page Successfully
    Given I click on Menuteb computers
    When I click On SubmMenu Desktops page
    Then I verify on Desktops page

  @Regression
  Scenario: User verify That Should Build Your Own Computer And Add To Cart Successfully
    Given I click on Menuteb computers
    When I click On SubmMenu Desktops page
    And I select product my own computer
    Then I click my processor
    And I click Ram
    And I click Hdd
    And I click OS
    And I click Software
    And I click On add to cart button
    Then I verify product add to cart or not


