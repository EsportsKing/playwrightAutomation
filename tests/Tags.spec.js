import {test, expect} from '@playwright/test';

test('test login page @sanity', async ({ page }) => {
    console.log('This is test1');
});

test('test2 @sanity', async ({page}) => {
    console.log('This is test2');
});

test('test3 @regression', async ({page}) => {
    console.log('This is test3');
});

test('test4 @regression', async ({page}) => {
    console.log('This is test4');
});

test('test5 @sanity @regression', async ({page}) => {
    console.log('This is test5');
});