const { Builder, Key, By } = require("selenium-webdriver");

const {builder} = require ("selenium-webdriver");

async function seleniumTest(){

    // launch browser
    let driver = await new Builder().forBrowser("chrome").build();

    // opens requested site
    await driver.get("https://airbnb.com");

    // close browser
    // await driver.quit();

}

//to call the function, type "node test/selenium.js" in the terminal
seleniumTest()