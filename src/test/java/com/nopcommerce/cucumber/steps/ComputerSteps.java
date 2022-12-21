package com.nopcommerce.cucumber.steps;

import com.nopcommerce.pages.BuildYourOwnComputerPage;
import com.nopcommerce.pages.ComputerPage;
import com.nopcommerce.pages.DesktopsPage;
import com.nopcommerce.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ComputerSteps {
    @Given("^I click on Menuteb computers$")
    public void iClickOnMenutebComputers() {
        new HomePage().clickOnMenuTab("Computers");
    }

    @When("^I verify on computer page$")
    public void iVerifyOnComputerPage() {
        String expectedMessage = "Computers";
        String actualMessage = new ComputerPage().getPageTitleText();
        Assert.assertEquals("Computers page not displayed", expectedMessage, actualMessage);
    }

    @When("^I click On SubmMenu Desktops page$")
    public void iClickOnSubmMenuDesktopsPage() {
        new ComputerPage().clickOnSubMenu("Desktops");

    }

    @Then("^I verify on Desktops page$")
    public void iVerifyOnDesktopsPage() {
        String expectedMessage = "Desktops";
        String actualMessage = new DesktopsPage().getPageTitleText();
        Assert.assertEquals("Desktops page not displayed", expectedMessage, actualMessage);
    }

    @And("^I select product my own computer$")
    public void iSelectProductMyOwnComputer() {
        new DesktopsPage().selectProduct("Build your own computer");

    }

    @Then("^I click my processor$")
    public void iClickMyProcessor() {
        new BuildYourOwnComputerPage().selectprocessor();
    }

    @And("^I click Ram$")
    public void iClickRam() {
        new BuildYourOwnComputerPage().clickram();
    }

    @And("^I click Hdd$")
    public void iClickHdd() {
        new BuildYourOwnComputerPage().clickHDD();
    }


    @And("^I click OS$")
    public void iClickOS() {
        new BuildYourOwnComputerPage().clickso();
    }

    @And("^I click Software$")
    public void iClickSoftware() {
        new BuildYourOwnComputerPage().clicksof();
    }


    @And("^I click On add to cart button$")
    public void iClickOnAddToCartButton() {
        new BuildYourOwnComputerPage().clickOnAddToCartButton();
    }

    @Then("^I verify product add to cart or not$")
    public void iVerifyProductAddToCartOrNot() {
        String expectedMessage = "The product has been added to your shopping cart";
        String actualMessage = new BuildYourOwnComputerPage().getProductAddedMessage();
        Assert.assertEquals("Product does not added to cart", expectedMessage, actualMessage);
    }


}
