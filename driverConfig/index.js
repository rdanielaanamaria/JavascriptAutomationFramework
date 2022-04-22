// const { Builder} = require("selenium-webdriver"); /*pull our builder(builds webdriver for us)*/
// const chrome = require("selenium-webdriver/chrome");
// const proxy = require("selenium-webdriver/proxy");
// const options = new chrome.Options();
// const proxyServer = "36.65.66.148:8080";

// // options.setUserPreferences("browser.download.dir", "D:\Workspace\JavascriptAutomationFramework\driverConfig");
// // options.setUserPreferences("browser.download.foolderList", 2);
// // options.setUserPreferences("browser.helperApps.neverAsk.saveToDisk", "application/x-csv");

// // async function facebook() {
//     const driver =  new Builder()
//     .forBrowser("chrome")
//     .setChromeOptions(options)
//     .setProxy(proxy.manual({
//         http:proxyServer,
//         https: proxyServer
//     }))
//     .build(); /*the easiest way to build a  webdriver*/


//      driver.get("https://whatismyipaddress.com/"); /*tell the driver what to do */
// let acceptCookies = await driver.findElement(By.xpath("//button[@title='Allow essential and optional cookies']"));
// await acceptCookies.click();
// }
// facebook();



// how to wait fot tasks to finish
const { Builder } = require("selenium-webdriver");

const driver = new Builder()
    .forBrowser("chrome")
    .build(); /*the easiest way to build a  webdriver*/

//using await in async functions can throw errors and we need to surround them with try catch 
async function openWebsites() {
    try {
        await driver.get("http://yahoo.com");
        await driver.get("http://google.com");
    } catch (error) {
        console.log(error);
    }

}

openWebsites();


