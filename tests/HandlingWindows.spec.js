import {test, expect, chromium} from '@playwright/test';

test('Handling Multiple Windows', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const allPages = await context.pages();
    console.log('Total Pages Created: ' + allPages.length);

    await page1.goto('https://testautomationpractice.blogspot.com');
    await expect(page1).toHaveTitle('Automation Testing Practice');

    await page2.goto('https://orangehrm.com');
    const page2Title = await page2.title();
    await expect(page2).toHaveTitle(page2Title);

})

test.only('Handling Multiple Pages in Windows', async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page1).toHaveTitle('OrangeHRM');

    const pagePromise = context.waitForEvent('page');
    await page1.locator('//a[normalize-space()="OrangeHRM, Inc"]').click();
    const newPage = await pagePromise;
    await expect(newPage).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM');

    await page1.waitForTimeout(3000);
    await newPage.waitForTimeout(3000);

    await browser.close();
})