import {test, expect} from '@playwright/test';

test('Handling Frames', async ({page}) => {
    
    await page.goto('https://ui.vision/demo/webtest/frames/');

    //total amount of frames
    const allframes = await page.frames();
    console.log('Total Frames: ' + allframes.length);    

    //approach 1: using the name or url of the frame
    // const var = await page.frame('frame1');
    const frame1 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1.fill("[name='mytext1']", 'Welcome to Frame 1');


    // approach 2 using the frame locator
    const frameLocator = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']");
    await frameLocator.fill('Welcome to Frame 2');
    await page.waitForTimeout(3000);
})