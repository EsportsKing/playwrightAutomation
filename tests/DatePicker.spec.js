import {test, expect} from '@playwright/test';

test('Handling Date-Pickers', async ({page}) => {
    
    await page.goto('https://testautomationpractice.blogspot.com');
    //await page.fill('#datepicker', '06/12/2024');

    const year = '2024';
    const month = 'June';
    const date = '12';

    await page.click('#datepicker'); // opens datepicker

    while(1){
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();
        if((currentYear == year) && (currentMonth == month)){
            break;
        }
        await page.locator('[title="Prev"]').click();
    }
/*
    const dates = await page.$$("//a[@class='ui-state-default']");
    for(const dt of dates){
        if(await dt.textContent() == date){
            await dt.click();
            break;
        } 
    } */

    // Selecting date from datepicker using a single locator
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`);      
    await page.waitForTimeout(3000);
})