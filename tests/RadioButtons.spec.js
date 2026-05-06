import {test, expect} from '@playwright/test';

test('handle radio buttons' , async ({page}) => {

    await page.goto("https://demoqa.com/automation-practice-form");
    
    //await page.locator("//input[@id='gender-radio-1']").check();
    await page.check("#gender-radio-1");
    await expect(page.locator("#gender-radio-1")).toBeChecked();
    await expect(page.locator("#gender-radio-1").isChecked()).toBeTruthy();

    await expect(await page.locator("#gender-radio-2").isChecked()).toBeFalsy();

    await page.waitForTimeout(3000); //pause for 5 seconds to see the filled input box
    
})