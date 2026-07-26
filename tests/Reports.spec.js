import {test, expect} from '@playwright/test';

test('Test1', async ({page}) => {
    await page.goto('https://www.demoblaze.com/');
    await expect(page).toHaveTitle('STORE');
})

test('Test2', async ({page}) => {
    await page.goto('https://www.demoblaze.com/');
    await expect(page.locator('#nava')).toContainText('PRODUCT STORE');
})

test('Test3', async ({page}) => {
    await page.goto('https://www.demoblaze.com/');
    await expect(page.locator('#login2')).toBeVisible();
});