const { Builder,By, } = require("selenium-webdriver");

const driver = new Builder()
    .forBrowser("chrome")
    .build();

async function datePicker(){
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form");
        await driver.findElement(By.xpath("//input[@formcontrolname='dateOne']")).sendKeys("Apr 23, 2022");
        await driver.findElement(By.xpath("//input[@formcontrolname='dateTwo']")).sendKeys("Apr 14, 2022 - Apr 22, 2022");
        await driver.findElement(By.id("submit")).click();
        

    } catch (error) {
        console.log(error);
    }
}

datePicker();