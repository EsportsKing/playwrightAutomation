import {test, expect} from '@playwright/test';

// test.only
test('test1', async ({ page }) => {
    console.log('This is test1');
});

//test.skip
test.skip('test2', async ({page}) => {
    console.log('This is test2');
});

test('test3', async ({page, browserName}) => {
    console.log('This is test3');
    if(browserName === 'chromium'){
        test.skip();
    }
});

//Fixme
test('test4', async ({ page }) => {
    test.fixme('This test is not working due to some issue');
    console.log('This is test4');
});

//Fail test will pass if it fails an assertion
test('test5', async ({ page }) => {
    test.fail('This test is expected to fail');
    console.log('This is test5');
    expect(1).toBe(2);
});

test('test6', async ({ page, browserName }) => {
    if(browserName === 'firefox'){
        test.fail('This test is not working in firefox');
    }
    console.log('This is test6');
});

//slow
//can specify the maximum timeout for test inside the playwright config file
test('test7', async ({ page }) => {
    test.slow(); //automatically triplex the timeout for this test
    test.setTimeout(5000); //set the timeout for this test to 5 seconds
    console.log('This is test7');
    await page.goto('https://www.demoblaze.com/');
});