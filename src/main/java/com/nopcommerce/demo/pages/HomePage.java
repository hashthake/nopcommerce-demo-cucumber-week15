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

import java.util.List;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Log in')]")
    WebElement loginLink;

    @CacheLookup
    @FindBy(linkText = "Register")
    WebElement registerLink;

    @CacheLookup
    @FindBy(xpath = "//img[@alt='nopCommerce demo store']")
    WebElement logo;

    @CacheLookup
    @FindBy(xpath = "//a[@class='ico-account']")
    WebElement myAccountLink;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Log out')]")
    WebElement logOutLink;

    @CacheLookup
    @FindBy(xpath = "//div[@class='header-menu']/child::ul[1]/li/a")
    List<WebElement> topMenuList;


    public void clickOnLoginLink() {
        clickOnElement(loginLink);
        log.info("Click on Login Link" + loginLink.toString());
    }

    public boolean isLogInLinkDisplay() {
        log.info("Login Link is on display" + loginLink.toString());
        boolean b = loginLink.isDisplayed();
        return b;
    }

    public void clickOnRegisterLink() {
        clickOnElement(registerLink);
        log.info("Click on register link" + registerLink.toString());
    }

    public void clickOnMyAccountLink() {
        clickOnElement(myAccountLink);
        log.info("Click on my account link" + myAccountLink.toString());
    }

    public HomePage clickOnLogOutLink() {
        clickOnElement(logOutLink);
        log.info("Click on logout link" + logOutLink.toString());
        return new HomePage();
    }

    public boolean isLogOutLinkDisplay() {
        log.info("Log out link is display" + logOutLink.toString());
        boolean b = logOutLink.isDisplayed();
        return b;
    }

    public boolean isLogoDisplayed() {
        boolean b = logo.isDisplayed();
        return b;
    }

    public void clickOnMenuTab(String tab) {
        for (WebElement menu : topMenuList) {
            if (menu.getText().contains(tab)) {
                clickOnElement(menu);
                break;
            }
        }
    }

}
