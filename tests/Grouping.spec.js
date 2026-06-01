import {test, expect} from '@playwright/test';

test.beforeAll(() => {
    console.log('This will run before all tests');
});

test.afterAll(() => {
    console.log('This will run after all tests');
});

test.beforeEach(() => {
    console.log('This will run before each test');
});

test.afterEach(() => {
    console.log('This will run after each test');
}); 

test.describe('Grouping Tests', () => {

    test('First Test', async({page}) => {

        console.log('this is test 1');
    });

    test('Second Test', async({page}) => {

        console.log('this is test 2');
    });

});

test.describe('Second Grouping Tests', () => {
    test('Third Test', async({page}) => {

        console.log('this is test 3');
    });

    test('Fourth Test', async({page}) => {

        console.log('this is test 4');
    });
});