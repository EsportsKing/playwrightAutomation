import {test, expect} from '@playwright/test';

test('Handling Tables', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com');
    const table = await page.locator('#productTable');

    const columns = await table.locator('thead tr th');
    console.log('Total Columns: ' + await columns.count());

    const rows = await table.locator('tbody tr');
    console.log('Total Rows: ' + await rows.count());
    expect(await columns.count()).toBe(4);
    expect(await rows.count()).toBe(5);

    //Selecting a soecific check-box
    /*const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: '4'      
    });
    await matchedRow.locator('input').check();*/

    // Selecting multiple check-boxes
    /*await selectProduct(rows,page,'Smartphone');
    await selectProduct(rows,page,'Laptop');
    await selectProduct(rows,page,'Tablet');*/
    
    // Print all product details in a loop
    /*for(let i=0; i< await rows.count(); i++){
        const currentrow = await rows.nth(i);
        const tds = currentrow.locator('td');
        for(let j=0; j< await tds.count()-1; j++){
            const cellValue = await tds.nth(j).textContent();
            console.log(cellValue);
        }
    }*/

    // Read data from all pages on a table

    //Count numbner of pages
    const paginatedTables = await page.locator('.pagination li a');
    console.log('Total Pages: ' + await paginatedTables.count());
    
    for(let p=0; p< await paginatedTables.count(); p++){
        if(p>0){
            await paginatedTables.nth(p).click();
        }
        for(let i=0; i< await rows.count(); i++){
            const currentrow = await rows.nth(i);
            const tds = currentrow.locator('td');
            for(let j=0; j< await tds.count()-1; j++){
                const cellValue = await tds.nth(j).textContent();
                console.log(cellValue);
            }
        }
    }
    await page.waitForTimeout(3000);
})

async function selectProduct(rows, page, name){
        const matchedRow = rows.filter({
            has: page.locator('td'),
            hasText: name      
        });
    await matchedRow.locator('input').check();
}