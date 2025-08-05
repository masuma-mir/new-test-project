describe('Saving the card after logout ', () => {
    it('should save added to the cart items after logout', async () => {
        await browser.url('https://www.saucedemo.com/');
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        //Adding an item to the cart
        await $('#add-to-cart-sauce-labs-bike-light').click();
        await $('.shopping_cart_link').click();
        const cartLink = await $('.shopping_cart_link');
        await cartLink.click();

        //Logout
        await $('#react-burger-menu-btn').click();
        await $('#logout_sidebar_link').click();

        //Login
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        const cartBadge = await $('.shopping_cart_badge');
        await expect(cartBadge).toBeDisplayed();
        await expect(cartBadge).toHaveText('1');

        // Click on the cart icon (cart link)
       
        await cartLink.click();

        // Verify the correct item is in the cart
        const cartItemName = await $('.inventory_item_name');
        await expect(cartItemName).toHaveText('Sauce Labs Bike Light');
 
    });
})