package com.nopcommerce.pages;

import com.nopcommerce.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;


public class RegisterPage extends Utility {
    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(css = "div[class='page-title'] h1")
    WebElement registerText;

    @CacheLookup
    @FindBy(xpath = "//div[@id='gender']//label")
    List<WebElement> genderRadios;

    @CacheLookup
    @FindBy(id = "FirstName")
    WebElement firstNameField;

    @CacheLookup
    @FindBy(id = "LastName")
    WebElement lastNameField;

    @CacheLookup
    @FindBy(name = "DateOfBirthDay")
    WebElement dateOfBirthDay;

    @CacheLookup
    @FindBy(name = "DateOfBirthMonth")
    WebElement dateOfBirthMonth;

    @CacheLookup
    @FindBy(name = "DateOfBirthYear")
    WebElement dateOfBirthYear;

    @CacheLookup
    @FindBy(name = "Email")
    WebElement emailField;

    @CacheLookup
    @FindBy(id = "Password")
    WebElement passwordField;

    @CacheLookup
    @FindBy(id = "ConfirmPassword")
    WebElement confirmPasswordField;

    @CacheLookup
    @FindBy(css = "#register-button")
    WebElement registerBtn;

    @CacheLookup
    @FindBy(className = "field-validation-error")
    List<WebElement> fieldValidationErrors;

    @CacheLookup
    @FindBy(css = ".result")
    WebElement yourRegCompletedText;

    @CacheLookup
    @FindBy(css = ".button-1.register-continue-button")
    WebElement continueBtn;


    public String getRegisterText() {
        String message = getTextFromElement(registerText);
        log.info("Get registerText : " + registerText.getText() + "<br>");
        return message;
    }

    public void selectGender(String gender) {
        for (WebElement radio : genderRadios) {
            if (radio.getText().contains(gender)) {
                log.info("Select '" + gender + "' radio button" + "<br>");
                clickOnElement(radio);
                break;
            }
        }
    }

    public void enterFirstName(String firstName) {
        sendTextToElement(firstNameField, firstName);
        log.info("Enter Firstname : '" + firstName + "' to firstName field" + "<br>");
    }

    public void enterLastName(String lastName) {
        sendTextToElement(lastNameField, lastName);
        log.info("Enter Lastname : '" + lastName + "' to lastName field" + "<br>");
    }

    public void selectDateOfBirth(String day, String month, String year) {
        selectByVisibleTextFromDropDown(dateOfBirthDay, day);
        selectByVisibleTextFromDropDown(dateOfBirthMonth, month);
        selectByVisibleTextFromDropDown(dateOfBirthYear, year);

        log.info("Select day : '" + day + "', month : '" + month + "', year : '" + year + "'" + "<br>");
    }

    public void enterEmail(String email) {
        sendTextToElement(emailField, email);
        log.info("Enter Email : '" + email + "' to email field" + "<br>");
    }

    public void enterPassword(String password) {
        sendTextToElement(passwordField, password);
        log.info("Enter Password : '" + password + "' to password field" + "<br>");
    }

    public void enterConfirmPassword(String confPassword) {
        sendTextToElement(confirmPasswordField, confPassword);
        log.info("Enter Confirm password : '" + confPassword + "' to confirm password field" + "<br>");
    }

    public void clickOnRegisterButton() {

        log.info("Click on 'REGISTER' button" + "<br>");
        clickOnElement(registerBtn);
    }

    public String getValidationErrorMessageForField(String fieldName) {
        String validationMessage = null;
        for (WebElement message : fieldValidationErrors) {
            if (message.getAttribute("data-valmsg-for").equals(fieldName)) {
                validationMessage = message.getText();
                log.info("Click on 'REGISTER' button" + "<br>");
                break;
            }
        }
        return validationMessage;
    }

    public String getYourRegCompletedText() {
        String message = getTextFromElement(yourRegCompletedText);
        log.info("Get your reg completed text : " + yourRegCompletedText.getText() + "<br>");
        return message;
    }

    public void clickOnContinueButton() {
        log.info("Click on 'CONTINUE' button" + "<br>");
        clickOnElement(continueBtn);
    }

    @CacheLookup
    @FindBy(xpath = " //input[@id='FirstName']")
    WebElement firstname1;


    public void FirstName(String firstname) {
        log.info("Enter First Name" + "<br>");
        sendTextToElement(firstname1, firstname);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='gender-male']")
    WebElement selectMGender;

    public void selectyourGender() {
        log.info("select your Gender" + "<br>");
        clickOnElement(selectMGender);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='LastName']")
    WebElement lastname1;

    public void LastName(String lastname) {
        log.info("Enter Last Name" + "<br>");
        sendTextToElement(lastname1, lastname);
    }

    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthDay']")
    WebElement day;


    public void selectdayofbirth(String str) {
        log.info("select day of birth" + "<br>");
        selectByVisibleTextFromDropDown(day,str);

    }

    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthMonth']")
    WebElement month;

    public void selectmonthofbirth(String str) {
        log.info("select month of birth" + "<br>");
        selectByVisibleTextFromDropDown(month, str);

    }

    @CacheLookup
    @FindBy(xpath = "//select[@name='DateOfBirthYear']")
    WebElement year;

    public void selectyearofbirth(String str) {
        log.info("select year of birth" + "<br>");
        selectByVisibleTextFromDropDown(year, str);
    }


    @CacheLookup
    @FindBy(xpath = "//input[@id='Email']")
    WebElement emailid1;


    public void EmailName(String remail) {
        log.info("Enter EmailName" + "<br>");
        sendTextToElement(emailid1, remail);
    }


    @CacheLookup
    @FindBy(xpath = "//input[@id='Password']")
    WebElement password1;


    public void PassWord(String pass1) {
        log.info("Enter PassWord" + "<br>");
        sendTextToElement(password1, pass1);
    }


    @CacheLookup
    @FindBy(xpath = "//input[@id='ConfirmPassword']")
    WebElement cpassword1;


    public void ConfirmPassWord(String cpass1) {
        log.info("Enter Confirm PassWord" + "<br>");
        sendTextToElement(cpassword1, cpass1);
    }


    @CacheLookup
    @FindBy(xpath = "//button[@id='register-button']")
    WebElement regibutton;


    public void clickOnRegisterbutton() {
        log.info("Click on 'Regiter' button" + "<br>");
        clickOnElement(regibutton);
    }
}
