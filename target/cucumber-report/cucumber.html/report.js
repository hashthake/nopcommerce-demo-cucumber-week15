$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computerpage.feature");
formatter.feature({
  "line": 1,
  "name": "computer page test",
  "description": "\r\nAs a user I would like to check functions of computer page",
  "id": "computer-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3883783900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "verifyUserShouldNavigateToComputerPageSuccessfully()",
  "description": "",
  "id": "computer-page-test;verifyusershouldnavigatetocomputerpagesuccessfully()",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can check computer text display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 63363800,
  "status": "passed"
});
formatter.match({
  "location": "CompterPageSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 484366600,
  "status": "passed"
});
formatter.match({
  "location": "CompterPageSteps.iCanCheckComputerTextDisplay()"
});
formatter.result({
  "duration": 37727300,
  "status": "passed"
});
formatter.after({
  "duration": 679291500,
  "status": "passed"
});
formatter.before({
  "duration": 1811646100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "verifyUserShouldNavigateToDesktopPageSuccessfully",
  "description": "",
  "id": "computer-page-test;verifyusershouldnavigatetodesktoppagesuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I can see Desktop Text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 22100,
  "status": "passed"
});
formatter.match({
  "location": "CompterPageSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 499900200,
  "status": "passed"
});
formatter.match({
  "location": "CompterPageSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 447681900,
  "status": "passed"
});
formatter.match({
  "location": "CompterPageSteps.iCanSeeDesktopText()"
});
formatter.result({
  "duration": 25815200,
  "status": "passed"
});
formatter.after({
  "duration": 650579200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "verifyThatUserShouldBuildYourOwnComputerAndAddThemToCartSuccessfully",
  "description": "",
  "id": "computer-page-test;verifythatusershouldbuildyourowncomputerandaddthemtocartsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select ram \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select hdd \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select os \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I am able to message",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "computer-page-test;verifythatusershouldbuildyourowncomputerandaddthemtocartsuccessfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 30,
      "id": "computer-page-test;verifythatusershouldbuildyourowncomputerandaddthemtocartsuccessfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 31,
      "id": "computer-page-test;verifythatusershouldbuildyourowncomputerandaddthemtocartsuccessfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 32,
      "id": "computer-page-test;verifythatusershouldbuildyourowncomputerandaddthemtocartsuccessfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 33,
      "id": "computer-page-test;verifythatusershouldbuildyourowncomputerandaddthemtocartsuccessfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2421726200,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "verifyThatUserShouldBuildYourOwnComputerAndAddThemToCartSuccessfully",
  "description": "",
  "id": "computer-page-test;verifythatusershouldbuildyourowncomputerandaddthemtocartsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select ram \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select os \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I am able to message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 30500,
  "status": "passed"
});
formatter.match({
  "location": "CompterPageSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 519659800,
  "status": "passed"
});
formatter.match({
  "location": "CompterPageSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 550328000,
  "status": "passed"
});
formatter.match({
  "location": "CompterPageSteps.iClickOnBuildYourOwnComputer()"
});
formatter.result({
  "duration": 701293400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "CompterPageSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 53719300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "CompterPageSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 65050400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "CompterPageSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 59324300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "CompterPageSteps.iSelectOs(String)"
});
formatter.result({
  "duration": 49561200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "CompterPageSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 46569900,
  "status": "passed"
});
formatter.match({
  "location": "CompterPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 37057100,
  "status": "passed"
});
formatter.match({
  "location": "CompterPageSteps.iAmAbleToMessage()"
});
formatter.result({
  "duration": 271760700,
  "status": "passed"
});
formatter.after({
  "duration": 669424300,
  "status": "passed"
});
formatter.before({
  "duration": 2515168400,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "verifyThatUserShouldBuildYourOwnComputerAndAddThemToCartSuccessfully",
  "description": "",
  "id": "computer-page-test;verifythatusershouldbuildyourowncomputerandaddthemtocartsuccessfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select ram \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select hdd \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select os \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I am able to message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 157300,
  "status": "passed"
});
formatter.match({
  "location": "CompterPageSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 449061400,
  "status": "passed"
});
formatter.match({
  "location": "CompterPageSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 419472600,
  "status": "passed"
});
formatter.match({
  "location": "CompterPageSteps.iClickOnBuildYourOwnComputer()"
});
formatter.result({
  "duration": 677888100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "CompterPageSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 41560800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "CompterPageSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 63342400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "CompterPageSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 65431200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "CompterPageSteps.iSelectOs(String)"
});
formatter.result({
  "duration": 62517700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "CompterPageSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 47541200,
  "status": "passed"
});
formatter.match({
  "location": "CompterPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 42699300,
  "status": "passed"
});
formatter.match({
  "location": "CompterPageSteps.iAmAbleToMessage()"
});
formatter.result({
  "duration": 897737700,
  "status": "passed"
});
formatter.after({
  "duration": 654866400,
  "status": "passed"
});
formatter.before({
  "duration": 1806037900,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "verifyThatUserShouldBuildYourOwnComputerAndAddThemToCartSuccessfully",
  "description": "",
  "id": "computer-page-test;verifythatusershouldbuildyourowncomputerandaddthemtocartsuccessfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select ram \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select os \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I am able to message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27200,
  "status": "passed"
});
formatter.match({
  "location": "CompterPageSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 513123100,
  "status": "passed"
});
formatter.match({
  "location": "CompterPageSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 450817200,
  "status": "passed"
});
formatter.match({
  "location": "CompterPageSteps.iClickOnBuildYourOwnComputer()"
});
formatter.result({
  "duration": 865869500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "CompterPageSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 48419800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "CompterPageSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 59886700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "CompterPageSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 52715800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "CompterPageSteps.iSelectOs(String)"
});
formatter.result({
  "duration": 53128700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "CompterPageSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 57710500,
  "status": "passed"
});
formatter.match({
  "location": "CompterPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 40238600,
  "status": "passed"
});
formatter.match({
  "location": "CompterPageSteps.iAmAbleToMessage()"
});
formatter.result({
  "duration": 281395000,
  "status": "passed"
});
formatter.after({
  "duration": 682765000,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As a User I like to login to nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2466803100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 17900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 395030800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 27733200,
  "error_message": "org.junit.ComparisonFailure: Login page not display expected:\u003c...come, Please Sign In[]\u003e but was:\u003c...come, Please Sign In[!]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.nopcommerce.demo.steps.LoginSteps.iShouldNavigateToLoginPageSuccessfully(LoginSteps.java:26)\r\n\tat ✽.Then I should navigate to login page successfully(login.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 799740400,
  "status": "passed"
});
formatter.before({
  "duration": 1747015100,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "verifyTheErrorMessageWithinValidCredentials",
  "description": "",
  "id": "login-test;verifytheerrormessagewithinvalidcredentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter emailid",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter passwordfield",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify the error message",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 30300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 444489500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterEmailid()"
});
formatter.result({
  "duration": 55520000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterPasswordfield()"
});
formatter.result({
  "duration": 52129400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 356583600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyTheErrorMessage()"
});
formatter.result({
  "duration": 20057081200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027message-error validation-summary-errors\u0027]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-598O4S4\u0027, ip: \u0027192.168.1.226\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4e9a8df2e0fbc629c974f18d4c10135c, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027message-error validation-summary-errors\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\hvtha\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62841}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62841/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4e9a8df2e0fbc629c974f18d4c10135c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.getTextFromElement(Utility.java:64)\r\n\tat com.nopcommerce.demo.pages.LoginPage.getErrorMessage(LoginPage.java:66)\r\n\tat com.nopcommerce.demo.steps.LoginSteps.iVerifyTheErrorMessage(LoginSteps.java:48)\r\n\tat ✽.And I verify the error message(login.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 822428100,
  "status": "passed"
});
formatter.before({
  "duration": 1901013300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "verifyThatUserShouldLoginSuccessFullyWithValidCredentials",
  "description": "",
  "id": "login-test;verifythatusershouldloginsuccessfullywithvalidcredentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter emailidfield",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter passwordfieldwithvalidpassword",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I verify that logout link is on display",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 77700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 439067500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterEmailidfield()"
});
formatter.result({
  "duration": 64040100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterPasswordfieldwithvalidpassword()"
});
formatter.result({
  "duration": 55404800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 368036900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyThatLogoutLinkIsOnDisplay()"
});
formatter.result({
  "duration": 40032007400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Log out\u0027)]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-598O4S4\u0027, ip: \u0027192.168.1.226\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [15d4f837b418fe97f12aff14a3a4da0f, findElement {using\u003dxpath, value\u003d//a[contains(text(),\u0027Log out\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\hvtha\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62863}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62863/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 15d4f837b418fe97f12aff14a3a4da0f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat com.nopcommerce.demo.pages.HomePage.isLogOutLinkDisplay(HomePage.java:76)\r\n\tat com.nopcommerce.demo.steps.LoginSteps.iVerifyThatLogoutLinkIsOnDisplay(LoginSteps.java:64)\r\n\tat ✽.And I verify that logout link is on display(login.feature:23)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 785808600,
  "status": "passed"
});
formatter.before({
  "duration": 2508965900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "verifyThatUserShouldLogOutSuccessfully",
  "description": "",
  "id": "login-test;verifythatusershouldlogoutsuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter emailidfield",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter passwordfieldwithvalidpassword",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on logout link",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I able to see login link display",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 29500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 423219100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterEmailidfield()"
});
formatter.result({
  "duration": 64145400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterPasswordfieldwithvalidpassword()"
});
formatter.result({
  "duration": 52626300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 391102200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogoutLink()"
});
formatter.result({
  "duration": 20036778600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Log out\u0027)]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-598O4S4\u0027, ip: \u0027192.168.1.226\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [3e25cb27ea8612e122af4ef53b3eb72e, findElement {using\u003dxpath, value\u003d//a[contains(text(),\u0027Log out\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\hvtha\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62888}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62888/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3e25cb27ea8612e122af4ef53b3eb72e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.nopcommerce.demo.pages.HomePage.clickOnLogOutLink(HomePage.java:69)\r\n\tat com.nopcommerce.demo.steps.LoginSteps.iClickOnLogoutLink(LoginSteps.java:69)\r\n\tat ✽.Then I click on logout link(login.feature:31)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.iAbleToSeeLoginLinkDisplay()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 823487300,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register",
  "description": "",
  "id": "register",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2551626700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#  As a User I would like to register"
    }
  ],
  "line": 5,
  "name": "verifyUserShouldNavigateToRegisterPageSuccessfully",
  "description": "",
  "id": "register;verifyusershouldnavigatetoregisterpagesuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can verify register text \u003c\"Register\"\u003e",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 26800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 500910700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 29
    }
  ],
  "location": "RegisterPageSteps.iCanVerifyRegisterText(String)"
});
formatter.result({
  "duration": 32871300,
  "status": "passed"
});
formatter.after({
  "duration": 671645000,
  "status": "passed"
});
formatter.before({
  "duration": 2510195100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify That FirstName LastName Email Password And ConfirmPassword Fields Are Mandatory",
  "description": "",
  "id": "register;verify-that-firstname-lastname-email-password-and-confirmpassword-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click register button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should verify first name is require \"First name is required.\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I should verify last name is require \"Last name is required.\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should verify email is require \"Email is required.\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should verify password is require \"Password is required.\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should verify confirm password is require \"Password is required.\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 35300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 439161000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickRegisterButton()"
});
formatter.result({
  "duration": 53008600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 39
    }
  ],
  "location": "RegisterPageSteps.iShouldVerifyFirstNameIsRequire(String)"
});
formatter.result({
  "duration": 93307700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 38
    }
  ],
  "location": "RegisterPageSteps.iShouldVerifyLastNameIsRequire(String)"
});
formatter.result({
  "duration": 49387200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 34
    }
  ],
  "location": "RegisterPageSteps.iShouldVerifyEmailIsRequire(String)"
});
formatter.result({
  "duration": 61667300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 37
    }
  ],
  "location": "RegisterPageSteps.iShouldVerifyPasswordIsRequire(String)"
});
formatter.result({
  "duration": 51340900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 45
    }
  ],
  "location": "RegisterPageSteps.iShouldVerifyConfirmPasswordIsRequire(String)"
});
formatter.result({
  "duration": 60304200,
  "status": "passed"
});
formatter.after({
  "duration": 644078500,
  "status": "passed"
});
formatter.before({
  "duration": 1767901500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "verifyThatUserShouldCreateAccountSuccessfully",
  "description": "",
  "id": "register;verifythatusershouldcreateaccountsuccessfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I select gender Female",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I enter firstname",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter lastname",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select day,month,year",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter email",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter confirm password",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on registerbutton",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I verify message",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 33100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 436256100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iSelectGenderFemale()"
});
formatter.result({
  "duration": 60623600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iEnterFirstname()"
});
formatter.result({
  "duration": 58715300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iEnterLastname()"
});
formatter.result({
  "duration": 56660700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iSelectDayMonthYear()"
});
formatter.result({
  "duration": 161564100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iEnterEmail()"
});
formatter.result({
  "duration": 54078500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iEnterPassword()"
});
formatter.result({
  "duration": 54191500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iEnterConfirmPassword()"
});
formatter.result({
  "duration": 54170300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterbutton()"
});
formatter.result({
  "duration": 727870700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iVerifyMessage()"
});
formatter.result({
  "duration": 20649300,
  "status": "passed"
});
formatter.after({
  "duration": 646668000,
  "status": "passed"
});
});