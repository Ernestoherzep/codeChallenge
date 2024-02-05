import { BeforeAll, AfterAll, Before, After, Status } from "@cucumber/cucumber";
import {  Browser, BrowserContext, chromium} from '@playwright/test';
import { pageFixture } from "./pageFixture";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function (){
    browser = await chromium.launch({headless: false});
});


Before(async function () {
    context = await browser.newContext();
    const page = await browser.newPage();
    pageFixture.page = page;
});

AfterAll(async function () {
    await browser.close();
});

After(async function ( {pickle, result} ){
    // screenshot
    if (result?.status == Status.FAILED){
        const img = await pageFixture.page.screenshot({path: `./test-result/screenshots/${pickle.name}.png`});
        await this.attach(img, "image/png");
    }
    await pageFixture.page.close();
    await context.close();
});