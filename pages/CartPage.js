exports.CartPage = class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItems = '//tbody/tr/td[2]';
    }

    async checkProductInCart(productName) {
        const cartItems = await this.page.$$(this.cartItems);
        for (const item of cartItems) {
            if (productName === await item.textContent()) {
                return true;
                break;
            }
        }
        return false;
    }
}