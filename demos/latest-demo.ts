// Downloads the latest GOTV demo from hltv.org
// tslint:disable:no-console

import * as fs from "fs";
import { join } from "path";
import * as request from "request";
import { Builder, By, until } from "selenium-webdriver";
import { Options } from "selenium-webdriver/chrome";

(async () => {
  const options = new Options().addArguments(
    "headless",
    "disable-gpu",
    "no-sandbox",
    "disable-dev-shm-usage"
  );

  const driver = await new Builder()
    .forBrowser("chrome")
    .withCapabilities(options)
    .build();

  driver.manage().setTimeouts({ implicit: 5000 });

  try {
    console.log("Navigating to hltv.org...");
    await driver.get("https://www.hltv.org/results?content=demo&gameType=CSGO");

    const oldPage = driver.findElement(By.css("html"));

    console.log("Dismissing cookie popup...");
    await driver
      .findElement(By.id("CybotCookiebotDialogBodyButtonDecline"))
      .click();

    // Wait for page to reload
    await driver.wait(until.stalenessOf(oldPage));

    const matchElem = await driver.findElement(
      By.css(`.result-con > a[href^="/matches/"]`)
    );
    console.log(`Viewing match '${await matchElem.getText()}'...`);
    await matchElem.click();

    const downloadElem = await driver.findElement(
      By.css(`a[href^="/download/demo/"]`)
    );
    return await downloadElem.getAttribute("href");
  } finally {
    await driver.quit();
  }
})()
  .then(url => {
    console.log(`Downloading '${url}'...`);
    request(url)
      .on("error", err => {
        console.error("Request error", err);
      })
      .pipe(fs.createWriteStream(join(__dirname, "latest.rar")));
  })
  .catch(err => {
    console.error(err);
  });
