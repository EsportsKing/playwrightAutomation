import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';
import {CartPage} from '../pages/CartPage';

test('Page Object Model', async ({page}) => {
    //Login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('pavanol', 'test@123');
    await page.waitForTimeout(2000);

    //Home
    const home = new HomePage(page);
    await home.addProductToCart('Nexus 6');
    await page.waitForTimeout(2000);
    await home.gotoCart();

    //Cart
    const cart = new CartPage(page);
    await page.waitForTimeout(2000);
    expect(await cart.checkProductInCart('Nexus 6')).toBeTruthy();
});