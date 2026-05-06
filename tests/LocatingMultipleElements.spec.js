import {test, expect} from '@playwright/test'

test('LocateMultipleElements', async ({page})=>{

    await page.goto("https://demoblaze.com");
    /*const links = await page.$$('a');

    for(const link of links){
        const linktext = await link.textContent();
        console.log(linktext);
    }*/
    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");
    const productes = await page.$$("//div[@id='tbodyid']//div//h4/a");

    for (const product of productes){
        const productname = await product.textContent();
        console.log(productname);
    }
})