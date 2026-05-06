import {test, expect} from "@playwright/test";

test ("Handle multi select dropdown", async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com");

    // Select multiple options from multi select dropdown
    await page.selectOption('#colors', ['Blue', 'Red', 'Yellow']);

    //Asseertions
    //1 Check number of options in dropdown
    const coloroptions = await page.locator('#colors option');
    await expect(coloroptions).toHaveCount(7);

    //2 Check number of options in dropdown using JS array
    const coloroptions2 = await page.$$('#colors option');
    console.log("Number of options: " + coloroptions2.length);
    await expect(coloroptions2.length).toBe(7);

    //3 Check presence of value in dropdown
    const options = await page.locator('#colors').textContent();
    await expect(options.includes('Blue')).toBeTruthy();
    await expect(options.includes('Black')).toBeFalsy();
    

    await page.waitForTimeout(3000);

})