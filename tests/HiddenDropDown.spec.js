import {test, expect} from '@playwright/test';

test('Hidden Drop Down', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();    

    await page.locator('span:has-text("PIM")').click();
    await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]").click();

    //waiting for options to load
    await page.waitForTimeout(2000);
    const options = await page.$$("//div[@role='listbox']//span");
    for(let option of options){
        const text = await option.textContent();
        console.log(text);
        if(text.includes("QA Engineer")){
            await option.click();
            break;
        }
    }
    await page.waitForTimeout(3000);
});