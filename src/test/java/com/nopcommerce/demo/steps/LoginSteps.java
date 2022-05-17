package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();

    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        String expectedMessage = "Welcome, Please Sign In";
        String actualMessage = new LoginPage().getWelcomeText();
        Assert.assertEquals("Login page not display", expectedMessage, actualMessage);
    }

    @And("^I enter emailid$")
    public void iEnterEmailid() {
        new LoginPage().enterEmailId("abc654@gmail.com");
    }

    @And("^I enter passwordfield$")
    public void iEnterPasswordfield() {
        new LoginPage().enterPassword("Abc123");
    }

    @Then("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @And("^I verify the error message$")
    public void iVerifyTheErrorMessage() {
        String expectedmessage = "Login was unsuccessful. Please correct the errors and try again.\n" +
                "No customer account found";
        Assert.assertEquals("Error message on display", expectedmessage, new LoginPage().getErrorMessage());
    }


    @And("^I enter emailidfield$")
    public void iEnterEmailidfield() {
        new LoginPage().enterEmailId("carl.barby@gmail.com");
    }

    @And("^I enter passwordfieldwithvalidpassword$")
    public void iEnterPasswordfieldwithvalidpassword() {
        new LoginPage().enterPassword("Abcd123");
    }

    @And("^I verify that logout link is on display$")
    public void iVerifyThatLogoutLinkIsOnDisplay() {
        new HomePage().isLogOutLinkDisplay();
    }

    @Then("^I click on logout link$")
    public void iClickOnLogoutLink() {
        new HomePage().clickOnLogOutLink();
    }

    @And("^I able to see login link display$")
    public void iAbleToSeeLoginLinkDisplay() {
        new HomePage().isLogInLinkDisplay();
    }
}
