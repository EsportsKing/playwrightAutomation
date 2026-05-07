import {test, expect} from '@playwright/test'; 
const mySelector = '.listHeader___b48871';
const tutorSelector = "//li[contains(@class, 'sc-iwsKbI')]/div/text()[1]";

test('Auto Suggest Drop Down', async ({page}) => {
    await page.goto('https://www.redbus.in');

    // Using my own selectors
    await page.locator('#srcinput').fill('Delhi');
    await page.waitForTimeout(2000); // Wait for dropdown to load
    await page.waitForSelector(mySelector);

    const fromCitiOptions = page.locator(mySelector);
    const count = await fromCitiOptions.count();
    for (let i = 0; i < count; i++) {
        const text = await fromCitiOptions.nth(i).textContent();
        //console.log(text);
        if(text.includes('Darshan')) {
            await fromCitiOptions.nth(i).click();
            break;
        }
    }

    await page.waitForTimeout(3000);
});