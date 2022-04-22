// run cmd and npm init -y and run it with code . in vsc

const {Builder, By, Key, util} = require("selenium-webdriver");
async function example(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://www.google.com");
    let acceptCookies = await driver.findElement(By.xpath("//div[text()='Sunt de acord']"));
    await acceptCookies.click();
    await driver.findElement(By.name("q")).sendKeys("Selenium", Key.RETURN);

}
example();