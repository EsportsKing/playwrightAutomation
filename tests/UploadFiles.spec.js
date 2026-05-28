import {test, expect} from '@playwright/test';

test('Uploading Files', async ({page}) => {
    await page.goto('https://practice.expandtesting.com/upload');

    await page.waitForSelector('#fileInput');
    //await page.locator('#fileInput').click();

    await page.locator('#fileInput').setInputFiles('tests/testFile.txt');
})

test.only('Uploading Multiple Files', async ({page}) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator('#filesToUpload').setInputFiles(['tests/testFile.txt', 'tests/anotherFile.txt']);
    await page.waitForTimeout(3000);

    expect(await page.locator('#fileList').textContent()).toContain('testFile.txt');
    expect(await page.locator('#fileList').textContent()).toContain('anotherFile.txt');

    await page.waitForTimeout(3000);
    await page.locator('#filesToUpload').setInputFiles([]);
    expect(await page.locator('#fileList').textContent()).toContain('No Files Selected');

})