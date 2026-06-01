import {test, expect} from '@playwright/test';

test('page screenshot', async ({page}) => {
    await page.goto('https://demoblaze.com/index.html');
    await page.screenshot({path: 'tests/screenshots/' + Date.now() + 'HomePage.png'});
});

test.only('element screenshot', async ({page}) => {  
    await page.goto('https://demoblaze.com/index.html');
    await page.locator('#tbodyid').screenshot({path: 'tests/screenshots/' + Date.now() + 'FirstProduct.png'});
});

test('full page screenshot', async ({page}) => {
    await page.goto('https://demoblaze.com/index.html');
    await page.screenshot({path: 'tests/screenshots/' + Date.now() + 'FullPage.png', fullPage: true});
});