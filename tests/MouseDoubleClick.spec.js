import {test, expect} from '@playwright/test';

test('Handling Mouse Double Click', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com');

    await page.locator('//button[normalize-space()="Copy Text"]').dblclick();

    await page.waitForTimeout(3000);
    
    const f2 = await page.locator('#field2');
    await expect(f2).toHaveValue('Hello World!');
})