import {test, expect} from '@playwright/test';

test ('Keyboard Actions', async ({page}) => {

    await page.goto('https://gotranscript.com/text-compare');
    //await page.locator('//textarea[@placeholder="Paste one version of the text here."]').fill("yo yo yo yo <3");
    await page.type('[name="text1"]', "yo yo yo yo <3");

    //Ctrl + A
    await page.keyboard.press('Control+A');
    //Ctrl + C
    await page.keyboard.press('Control+C');
    //Tab
    await page.keyboard.press('Tab');
    //Ctrl + V
    await page.keyboard.press('Control+V');
    await page.waitForTimeout(3000);
})