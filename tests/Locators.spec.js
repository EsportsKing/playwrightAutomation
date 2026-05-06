// const {test, expect} = require('@playwright/test')
import {test, expect} from '@playwright/test'

test('Locators', async ({page})=>{

    await page.goto("https://demoblaze.com")

    //click on login button - property of the element oas a locator
    await page.locator('id=login2').click();

    //await page.locator('#loginusername').fill('pavanol');
    await page.fill('#loginusername', 'pavanol');
    //await page.type('#loginusername', 'pavanol')

    // provide password
    await page.fill("input[id$=loginpassword]", 'test@123');

    await page.click("//button[normalize-space()='Log in']");

    const LogoutLink = await page.locator("//a[normalize-space()='Log out']");

    await expect(LogoutLink).toBeVisible();
    await page.close();
})