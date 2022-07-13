// code pulling out functions from the node module.
const { Builder, Key, By } = require("selenium-webdriver");

const {builder} = require ("selenium-webdriver");

async function firstTest() {

    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    // navigate to our application
    await driver.get('https://www.google.com/');

    // add a text
    await driver.findElement(By.className("gLFyfgsfi")).sendKeys("amazon", Key.ENTER);

    // close the browser
    await driver.quit();
}
// calling the function
firstTest()