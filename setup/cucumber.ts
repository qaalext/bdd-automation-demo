import "../setup/setup-env"; // Ensure environment variables are loaded
import { setDefaultTimeout, BeforeAll, AfterAll, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from 'playwright';



let browser: Browser;
let context: BrowserContext;
let page: Page;

setDefaultTimeout(60 * 1000); // Set timeout for steps

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
});

Before(async () => {
  context = await browser.newContext();
  page = await context.newPage();
});

After(async () => {
  await page.close();
  await context.close();
});

AfterAll(async () => {
  await browser.close();
});

// Expose variables for steps
export { browser, context, page };
