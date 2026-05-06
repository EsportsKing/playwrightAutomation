import {test, expect} from '@playwright/test';

test("Handle dropdowns", async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com");

    //await page.locator("#country").selectOption({label: 'France'}); //visible text
    //await page.locator("#country").selectOption('France');  /by using visible text
    //await page.locator("#country").selectOption({value: 'uk'}); //by using value
    //await page.locator("#country").selectOption({index: 1}); // by using inxdex
    //await page.selectOption("#country", "India"); // by text

    // Assertions
    //1 Check number of options in dropdown
    //const options = await page.locator('#country option');
    //await expect(options).toHaveCount(10);

    // Check number of options in dropdown 2nd approach
    const options2 = await page.$$('#country option');
    //console.log("Number of options: " + options2.length);
    
    //await expect(options2.length).toBe(10);

    // Check presence of value in the dropdown - Approach 1
    //const content = await page.locator("#country").textContent();
    //await expect(content.includes('India')).toBeTruthy();

     // Check presence of value in the dropdown - Approach 2
    //let status = false;
    /*for(const option of options2){
        //console.log(await option.textContent());
        let value = await option.textContent();
        if(value.includes('France')){
            status = true;
            break;
        }
    }
    await expect(status).toBeTruthy();*/
    for(const option of options2){
        //console.log(await option.textContent());
        let value = await option.textContent();
        console.log(value);
        if(value.includes('France'))
        {
             console.log(value);
            await page.locator("#country").selectOption(value);
            break;
        }
        break;
    }

    await page.waitForTimeout(3000);

})