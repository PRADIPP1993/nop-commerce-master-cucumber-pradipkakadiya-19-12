package com.nopcommerce.cucumber.steps;

import com.nopcommerce.pages.HomePage;
import com.nopcommerce.pages.RegisterPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class RegisterSteps {
    @Given("^I click on Register Link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }

    @When("^I verify On register page or not$")
    public void iVerifyOnRegisterPageOrNot() {
        Assert.assertEquals("Register page not displayed", new RegisterPage().getRegisterText(), "Register");
    }

    @When("^I click Gender button$")
    public void iClickGenderButton() {
        new RegisterPage().selectyourGender();
    }


    @And("^I Enter First Name\"([^\"]*)\"$")
    public void iEnterFirstName(String firstname)  {
        new RegisterPage().FirstName(firstname);
    }

    @And("^I Last Name \"([^\"]*)\"$")
    public void iLastName(String lastname) {
        new RegisterPage().LastName(lastname);
    }

    @And("^I click day of birth$")
    public void iClickDayOfBirth() {
        new RegisterPage().selectdayofbirth("//select[@name='DateOfBirthDay']/option[6]");

    }

    @And("^I click month of birth$")
    public void iClickMonthOfBirth() {
        new RegisterPage().selectmonthofbirth("//select[@name='DateOfBirthMonth']/option[6]");
    }

    @And("^I click year of birth$")
    public void iClickYearOfBirth() {
        new RegisterPage().selectyearofbirth("//option[contains(text(),'2005')]");

    }

    @And("^I Enter register emailid \"([^\"]*)\"$")
    public void iEnterRegisterEmailid(String remail) {
        new RegisterPage().EmailName(remail);

    }

    @And("^I Enter register password \"([^\"]*)\"$")
    public void iEnterRegisterPassword(String pass1) {
        new RegisterPage().PassWord(pass1);
    }

    @And("^I Enter register Confirm password \"([^\"]*)\"$")
    public void iEnterRegisterConfirmPassword(String cpass1)  {
        new RegisterPage().ConfirmPassWord(cpass1);
    }

    @Then("^I Click Register button$")
    public void iClickRegisterButton() {
        new RegisterPage().clickOnRegisterbutton();

    }



}
