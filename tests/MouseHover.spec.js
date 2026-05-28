import {test,expect} from '@playwright/test';

test('Handling Mouse Hover', async ({page}) => {

    await page.goto('https://practice.expandtesting.com/hovers');
    await page.locator('(//img[@alt="User Avatar"])[1]').hover();
    //await page.locator('//a[normalize-space()="Mac (1)"]').hover();

    await page.waitForTimeout(3000);
})