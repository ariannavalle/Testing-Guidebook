const { remote } = require("webdriverio");

(async () => {

  const browser = await remote({
    // omit port in order to run with Chrome DevTools protocol

    // default ChromeDriver port
    // port: 9515, 

    // default Selenium Standalone port
    port: 4444,
    
    // path to run Selenium Standalone
    path: '/wd/hub',
    capabilities: { browserName: "chrome" },
  });

  await browser.url("https://webdriver.io");
  const title = await browser.getTitle();
  console.log("Title was: " + title);
  
  await browser.deleteSession();
})().catch((e) => console.error(e));
