import {test, expect} from '@playwright/test';

test.skip('Alert OK', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com');

    // Enable Alert Handling, otherwise it's handled by playwright automatically
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    });

    await page.click('#alertBtn');
    await page.waitForTimeout(3000);

})

test.skip('Confirmation Dialog OK/Cancel', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com');

    // Enable Alert Handling, otherwise it's handled by playwright automatically
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();
    });

    await page.click('#confirmBtn');

    await expect(page.locator('#demo')).toHaveText('You pressed OK!');

    await page.waitForTimeout(3000);

})

test('Prompt Dialog with Input', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com');

    // Enable Alert Handling, otherwise it's handled by playwright automatically
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toBe('Harry Potter');//toContain
        await dialog.accept('Crispy');
    });

    await page.click('#promptBtn');

    await expect(page.locator('#demo')).toHaveText('Hello Crispy! How are you today?');

    await page.waitForTimeout(3000);

})