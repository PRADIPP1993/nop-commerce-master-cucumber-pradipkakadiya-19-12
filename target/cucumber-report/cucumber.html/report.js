$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "As user I want to login into nop-commerce-demo website",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6848779500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User verify Should Navigate To Computer Page Successfully",
  "description": "",
  "id": "computer-test;user-verify-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I click on Menuteb computers",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I verify on computer page",
  "keyword": "When "
});
formatter.match({
  "location": "ComputerSteps.iClickOnMenutebComputers()"
});
formatter.result({
  "duration": 1043433800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyOnComputerPage()"
});
formatter.result({
  "duration": 84861100,
  "status": "passed"
});
formatter.after({
  "duration": 110700,
  "status": "passed"
});
formatter.before({
  "duration": 3281240100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User verify Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "computer-test;user-verify-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I click on Menuteb computers",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click On SubmMenu Desktops page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I verify on Desktops page",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iClickOnMenutebComputers()"
});
formatter.result({
  "duration": 683340200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnSubmMenuDesktopsPage()"
});
formatter.result({
  "duration": 593909500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyOnDesktopsPage()"
});
formatter.result({
  "duration": 55425500,
  "status": "passed"
});
formatter.after({
  "duration": 26400,
  "status": "passed"
});
formatter.before({
  "duration": 4030864600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User verify That Should Build Your Own Computer And Add To Cart Successfully",
  "description": "",
  "id": "computer-test;user-verify-that-should-build-your-own-computer-and-add-to-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I click on Menuteb computers",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click On SubmMenu Desktops page",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I select product my own computer",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click my processor",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I click Ram",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click Hdd",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click OS",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click Software",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click On add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I verify product add to cart or not",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerSteps.iClickOnMenutebComputers()"
});
formatter.result({
  "duration": 1107489600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnSubmMenuDesktopsPage()"
});
formatter.result({
  "duration": 589205300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iSelectProductMyOwnComputer()"
});
formatter.result({
  "duration": 1335599700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickMyProcessor()"
});
formatter.result({
  "duration": 134161400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickRam()"
});
formatter.result({
  "duration": 158244600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickHdd()"
});
formatter.result({
  "duration": 262384300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOS()"
});
formatter.result({
  "duration": 233041200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickSoftware()"
});
formatter.result({
  "duration": 180290300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 211676300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyProductAddToCartOrNot()"
});
formatter.result({
  "duration": 287003700,
  "status": "passed"
});
formatter.after({
  "duration": 146900,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "As user I want to login into nop-commerce-demo website",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 3617766700,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User verify Should Navigate To LoginPage",
  "description": "",
  "id": "login-test;user-verify-should-navigate-to-loginpage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I verify on login pages",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1022629400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyOnLoginPages()"
});
formatter.result({
  "duration": 193179000,
  "status": "passed"
});
formatter.after({
  "duration": 25700,
  "status": "passed"
});
formatter.before({
  "duration": 3307022100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User verify Error Message With Invalid Credentials",
  "description": "",
  "id": "login-test;user-verify-error-message-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I Enter invalid EmailId",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I Enter invalid Password",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Verify error mass",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1028746600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterEmailId()"
});
formatter.result({
  "duration": 485443300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterPassword()"
});
formatter.result({
  "duration": 226586200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 527987500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyErrorMass()"
});
formatter.result({
  "duration": 150767900,
  "status": "passed"
});
formatter.after({
  "duration": 25500,
  "status": "passed"
});
formatter.before({
  "duration": 3427724900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User verify That Should Log In SuccessFully With Valid Credentials",
  "description": "",
  "id": "login-test;user-verify-that-should-log-in-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I click on login link",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I Enter valid EmailId",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I Enter valid password",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Verify Mass",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1215430000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterValidEmailId()"
});
formatter.result({
  "duration": 449165800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterValidPassword()"
});
formatter.result({
  "duration": 192359500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 583333700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iVerifyMass()"
});
formatter.result({
  "duration": 20108674800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[normalize-space()\u003d\u0027Log out\u0027]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9ed9e73d48184f829a7554414bc2c9d9, findElement {using\u003dxpath, value\u003d//a[normalize-space()\u003d\u0027Log out\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\44744\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53495}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53495/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9ed9e73d48184f829a7554414bc2c9d9\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat com.nopcommerce.pages.HomePage.isLogOutLinkDisplay(HomePage.java:76)\r\n\tat com.nopcommerce.cucumber.steps.LoginSteps.iVerifyMass(LoginSteps.java:64)\r\n\tat ✽.Then I Verify Mass(login.feature:25)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 472197400,
  "status": "passed"
});
formatter.before({
  "duration": 2993275200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User verify That Should LogOut SuccessFully",
  "description": "",
  "id": "login-test;user-verify-that-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I click on login link",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I Enter valid EmailId",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I Enter valid password",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I verify logout or not",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 572461600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterValidEmailId()"
});
formatter.result({
  "duration": 244398400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterValidPassword()"
});
formatter.result({
  "duration": 155017500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 489651500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogoutLink()"
});
formatter.result({
  "duration": 20043454900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[normalize-space()\u003d\u0027Log out\u0027]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6a2736bd7b32027bd9a284c6228a5b59, findElement {using\u003dxpath, value\u003d//a[normalize-space()\u003d\u0027Log out\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\44744\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:53514}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53514/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6a2736bd7b32027bd9a284c6228a5b59\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.nopcommerce.pages.HomePage.clickOnLogOutLink(HomePage.java:70)\r\n\tat com.nopcommerce.cucumber.steps.LoginSteps.iClickOnLogoutLink(LoginSteps.java:70)\r\n\tat ✽.And I click on logout link(login.feature:32)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.iVerifyLogoutOrNot()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 394175700,
  "status": "passed"
});
formatter.uri("regiter.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "As user I want to login into nop-commerce-demo website",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 3027232700,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User verify Should Navigate To Register Page Successfully",
  "description": "",
  "id": "login-test;user-verify-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on Register Link",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I verify On register page or not",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 668383700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iVerifyOnRegisterPageOrNot()"
});
formatter.result({
  "duration": 195379000,
  "status": "passed"
});
formatter.after({
  "duration": 24200,
  "status": "passed"
});
formatter.before({
  "duration": 3241985300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User verify That FirstName LastName Email Password And Confirm Password Fields Are Mandatory",
  "description": "",
  "id": "login-test;user-verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I click on Register Link",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click Gender button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I Enter First Name\"pradip\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Last Name \"kakadiya\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#    And I click day of birth"
    },
    {
      "line": 18,
      "value": "#    And I click month of birth"
    },
    {
      "line": 19,
      "value": "#    And I click year of birth"
    }
  ],
  "line": 20,
  "name": "I Enter register emailid \"pradip123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Enter register password \"pradip123\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Enter register Confirm password \"pradip123\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Click Register button",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 685829500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickGenderButton()"
});
formatter.result({
  "duration": 210700400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pradip",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 352380600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kakadiya",
      "offset": 13
    }
  ],
  "location": "RegisterSteps.iLastName(String)"
});
formatter.result({
  "duration": 260567700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pradip123@gmail.com",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.iEnterRegisterEmailid(String)"
});
formatter.result({
  "duration": 382606300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pradip123",
      "offset": 27
    }
  ],
  "location": "RegisterSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 181374700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pradip123",
      "offset": 35
    }
  ],
  "location": "RegisterSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 196714500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickRegisterButton()"
});
formatter.result({
  "duration": 779803200,
  "status": "passed"
});
formatter.after({
  "duration": 127500,
  "status": "passed"
});
});