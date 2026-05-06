import {test, expect} from '@playwright/test';

test("Handle checkboxes", async ({page}) =>{

    await page.goto("https://demoqa.com/automation-practice-form");
    await page.locator("#hobbies-checkbox-1").check();
    await expect(await page.locator("#hobbies-checkbox-1")).toBeChecked();
    await expect(await page.locator("#hobbies-checkbox-1").isChecked()).toBeTruthy();
    await expect(await page.locator("#hobbies-checkbox-2").isChecked()).toBeFalsy();

    const checkboxLocators = [
        "#hobbies-checkbox-1",
        "#hobbies-checkbox-2",
        "#hobbies-checkbox-3"
    ];
    for(const locator of checkboxLocators){
        await page.locator(locator).check();

    }

    for(const locator of checkboxLocators){
        if(await page.locator(locator).isChecked()){
            console.log(`Checkbox with locator ${locator} is checked`);
            await page.locator(locator).uncheck();
        }
    }
    await page.waitForTimeout(3000);
    
})