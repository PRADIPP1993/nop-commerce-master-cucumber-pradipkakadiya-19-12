package com.nopcommerce.cucumber.steps;

import com.nopcommerce.pages.HomePage;
import com.nopcommerce.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginSteps {

    @Given("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @When("^I verify on login pages$")
    public void iVerifyOnLoginPages() {
        String expectedMessage = "Welcome, Please Sign In!";
        String actualMessage = new LoginPage().getWelcomeText();
        Assert.assertEquals("Login page not displayed", expectedMessage, actualMessage);
    }

    @When("^I Enter invalid EmailId$")
    public void iEnterEmailId() {
        new LoginPage().enterEmailId("prime123@gmail.com");

    }

    @And("^I Enter invalid Password$")
    public void iEnterPassword() {
        new LoginPage().enterPassword("prime123");
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^I Verify error mass$")
    public void iVerifyErrorMass() {
        String expectedErrorMessage = "Login was unsuccessful. Please correct the errors and try again.\n"
                + "No customer account found";
        String actualErrorMessage = new LoginPage().getErrorMessage();
        Assert.assertEquals("Error message not displayed", expectedErrorMessage, actualErrorMessage);

    }


    @When("^I Enter valid EmailId$")
    public void iEnterValidEmailId() {
        new LoginPage().enterEmailId("primtest123@gmail.com");

    }

    @And("^I Enter valid password$")
    public void iEnterValidPassword() {
        new LoginPage().enterPassword("Prime123");
    }

    @Then("^I Verify Mass$")
    public void iVerifyMass() {
        Assert.assertTrue("Logout link is not displayed", new HomePage().isLogOutLinkDisplay());

    }

    @And("^I click on logout link$")
    public void iClickOnLogoutLink() {
        new HomePage().clickOnLogOutLink();
    }


    @Then("^I verify logout or not$")
    public void iVerifyLogoutOrNot() {
        Assert.assertTrue("Login link is not displayed", new HomePage().isLogInLinkDisplay());

    }
}
