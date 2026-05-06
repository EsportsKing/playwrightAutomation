import {test, expect} from '@playwright/test';

test('handle inputbox' , async ({page}) => {

    await page.goto("https://demoqa.com/automation-practice-form");
    
    await expect(page.locator('#firstName')).toBeVisible(); 
    await expect(page.locator('#firstName')).toBeEmpty(); 
    await expect(page.locator('#firstName')).toBeEditable(); 
    await expect(page.locator('#firstName')).toBeEnabled(); 

    await page.locator('#firstName').fill("John");

    await page.waitForTimeout(3000); //pause for 5 seconds to see the filled input box
    
})