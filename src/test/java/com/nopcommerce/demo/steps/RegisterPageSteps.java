package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class RegisterPageSteps {

    @When("^I click on Register Link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegisterLink();
    }

    @Then("^I can verify register text <\"([^\"]*)\">$")
    public void iCanVerifyRegisterText(String Register) {
        Assert.assertEquals("Register Text not Displayed", Register, new RegisterPage().getRegisterText());
    }


    @When("^I click register button$")
    public void iClickRegisterButton() {
        new RegisterPage().clickOnRegisterButton();
    }

    @Then("^I should verify first name is require \"([^\"]*)\"$")
    public void iShouldVerifyFirstNameIsRequire(String firstname) {
        new RegisterPage().getValidationErrorMessageForField(firstname);
    }

    @And("^I should verify last name is require \"([^\"]*)\"$")
    public void iShouldVerifyLastNameIsRequire(String lastname) {
        new RegisterPage().getValidationErrorMessageForField(lastname);
    }

    @And("^I should verify email is require \"([^\"]*)\"$")
    public void iShouldVerifyEmailIsRequire(String email) {
        new RegisterPage().getValidationErrorMessageForField(email);
    }

    @And("^I should verify password is require \"([^\"]*)\"$")
    public void iShouldVerifyPasswordIsRequire(String password) {
        new RegisterPage().getValidationErrorMessageForField(password);

    }

    @And("^I should verify confirm password is require \"([^\"]*)\"$")
    public void iShouldVerifyConfirmPasswordIsRequire(String confirmpassword) {
        new RegisterPage().getValidationErrorMessageForField(confirmpassword);
    }

    @Then("^I select gender Female$")
    public void iSelectGenderFemale() {
        new RegisterPage().selectGender("Female");
    }

    @And("^I enter firstname$")
    public void iEnterFirstname() {
        new RegisterPage().enterFirstName("Carl");
    }

    @And("^I enter lastname$")
    public void iEnterLastname() {
        new RegisterPage().enterLastName("Barby");
    }

    @And("^I select day,month,year$")
    public void iSelectDayMonthYear() {
        new RegisterPage().selectDateOfBirth("12", "March", "1980");
    }

    @And("^I enter email$")
    public void iEnterEmail() {
        new RegisterPage().enterEmail("carl.barby@gmail.com");
    }

    @And("^I enter password$")
    public void iEnterPassword() {
        new RegisterPage().enterPassword("Abcd123");
    }

    @And("^I enter confirm password$")
    public void iEnterConfirmPassword() {
        new RegisterPage().enterConfirmPassword("Abcd123");
    }

    @Then("^I click on registerbutton$")
    public void iClickOnRegisterbutton() {
        new RegisterPage().clickOnRegisterButton();
    }

    @And("^I verify message$")
    public void iVerifyMessage() {
        String expectedmessage = "Your registration completed";
        Assert.assertEquals("Message not displayed", expectedmessage, new RegisterPage().getYourRegCompletedText());
    }
}
