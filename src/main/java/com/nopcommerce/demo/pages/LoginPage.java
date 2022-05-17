package com.nopcommerce.demo.pages;

import com.aventstack.extentreports.Status;
import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Welcome, Please Sign In!')]")
    WebElement welcomeText;

    @CacheLookup
    @FindBy(id = "Email")
    WebElement emailField;

    @CacheLookup
    @FindBy(name = "Password")
    WebElement passwordField;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Log in')]")
    WebElement loginButton;

    @CacheLookup
    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement errorMessage;

    public String getWelcomeText() {
        log.info("Welcome text" + welcomeText.toString());
        String message = getTextFromElement(welcomeText);
        return message;
    }

    public void enterEmailId(String email) {
        sendTextToElement(emailField, email);
        log.info("Enter email to email field" + emailField.toString());

    }

    public void enterPassword(String password) {
        sendTextToElement(passwordField, password);
        log.info("Enter password to password field" + passwordField.toString());

    }

    public void clickOnLoginButton() {
        clickOnElement(loginButton);
        log.info("Click on login button" + loginButton.toString());

    }

    public String getErrorMessage() {
        String message = getTextFromElement(errorMessage);
        log.info("Display error message" + errorMessage.toString());
        return message;
    }
}
