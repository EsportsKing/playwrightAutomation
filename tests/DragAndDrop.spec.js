import {test, expect} from '@playwright/test';
test('Drag and Drop', async ({page}) => {

    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    const sourceElement = await page.locator('#column-a');
    const targetElement = await page.locator('#column-b');

    // First approach
    /*await sourceElement.hover();
    await page.mouse.down();
    await targetElement.hover();
    await page.mouse.up();
    await page.waitForTimeout(3000);
*/
    // Second approach
    await sourceElement.dragTo(targetElement);
    await page.waitForTimeout(3000);
})