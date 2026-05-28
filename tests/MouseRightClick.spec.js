import {test, expect} from '@playwright/test';

test('Handling Mouse Right Click', async ({page}) => {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    const button = await page.locator('.context-menu-one.btn.btn-neutral');

    //right click action
    await button.click({button: 'right'});

    await page.waitForTimeout(3000);
})