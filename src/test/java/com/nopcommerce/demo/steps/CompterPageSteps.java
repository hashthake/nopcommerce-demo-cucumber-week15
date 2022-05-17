package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DesktopsPage;
import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class CompterPageSteps {
    @When("^I click on computer tab$")
    public void iClickOnComputerTab() {
        new HomePage().clickOnMenuTab("Computer");
    }

    @Then("^I can check computer text display$")
    public void iCanCheckComputerTextDisplay() {
        new ComputerPage().getPageTitleText();
    }

    @And("^I click on desktop link$")
    public void iClickOnDesktopLink() {
        new ComputerPage().clickOnSubMenu("Desktop");
    }

    @Then("^I can see Desktop Text$")
    public void iCanSeeDesktopText() {
        new ComputerPage().getPageTitleText();
    }

    @And("^I click on build your own computer$")
    public void iClickOnBuildYourOwnComputer() {
        new DesktopsPage().selectProduct("Build your own computer");
    }

    @And("^I select processor \"([^\"]*)\"$")
    public void iSelectProcessor(String processor) {
        new BuildYourOwnComputerPage().selectSoftware(processor);
    }

    @And("^I select ram \"([^\"]*)\"$")
    public void iSelectRam(String ram) {
        new BuildYourOwnComputerPage().selectRam(ram);
    }

    @And("^I select hdd \"([^\"]*)\"$")
    public void iSelectHdd(String hdd) throws Throwable {
        new BuildYourOwnComputerPage().selectHDD(hdd);
    }

    @And("^I select os \"([^\"]*)\"$")
    public void iSelectOs(String os) {
        new BuildYourOwnComputerPage().selectOS(os);
    }

    @And("^I select software \"([^\"]*)\"$")
    public void iSelectSoftware(String software) {
        new BuildYourOwnComputerPage().selectSoftware(software);
    }

    @And("^I click on add to cart button$")
    public void iClickOnAddToCartButton() {
        new BuildYourOwnComputerPage().clickOnAddToCartButton();
    }

    @Then("^I am able to message$")
    public void iAmAbleToMessage() {
        String expectedmessage = "The product has been added to your shopping cart";
        Assert.assertEquals("Product Added message not dispaly", expectedmessage, new BuildYourOwnComputerPage().getProductAddedMessage());
    }
}
