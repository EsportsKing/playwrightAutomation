exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.productList = '//div[@id="tbodyid"]//div//div[1]//div[1]//h4';
        //this.productList = '//*[@id="tbodyid"]/div/div/div/h4/a';
        this.addToCartButton = '//a[normalize-space()="Add to cart"]';
        this.cart='//a[@id="cartur"]';
    }

    async addProductToCart(productName) {
        const productList = await this.page.$$(this.productList);
        for (const product of productList) {
            console.log(await product.textContent());
            if (productName === await product.textContent()) {
                await product.click();
                break;
            }
        }
        await this.page.on('dialog', async dialog => {
            if(dialog.message().includes('added')) {
                await dialog.accept();
            }
        })
        await this.page.locator(this.addToCartButton).click();
    }

    async gotoCart() {
        await this.page.locator(this.cart).click();
    }
}
