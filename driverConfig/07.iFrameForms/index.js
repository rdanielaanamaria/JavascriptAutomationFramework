// an iFrame is an embeded website inside the webpage

const { Builder, By, Key, } = require("selenium-webdriver");

const driver = new Builder()
    .forBrowser("chrome")
    .build();

async function iFrameForms() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form");
        await driver.switchTo().frame();
        await driver.findElement(By.xpath("//input[@aria-describedby='i2 i3']")).sendKeys("Daniela");
        await driver.actions().sendKeys(Key.TAB).perform();
        await driver
            .actions()
            .sendKeys(Key
            .chord(
                Key.ARROW_DOWN, 
                Key.ARROW_DOWN, 
                Key.ARROW_DOWN,
                Key.ARROW_DOWN,
                )
            )
            .perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.TAB, Key.TAB)).perform();
        await driver
            .actions()
            .sendKeys(Key
            .chord(Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ARROW_DOWN,))
            .perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB,"02")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB,"25")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB,"1998")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE, Key.TAB)).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, "Secret answer")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
        
    } catch (error) {
        console.log(error);
    }
}
iFrameForms();