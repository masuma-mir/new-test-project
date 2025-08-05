describe('checkout', () => {
    it('should checkout successfully', async () => {
        await browser.url('https://www.saucedemo.com/');
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

           //Adding an item to the cart
           await $('#add-to-cart-sauce-labs-bike-light').click();
           await $('.shopping_cart_link').click();
           const cartLink = await $('.shopping_cart_link');
           await cartLink.click();

           //Checkout
           await $('#checkout').click(); 
           await $('#first-name').setValue('standardFirstName');
           await $('#last-name').setValue('randomLastName'); 
           await $('#postal-code').setValue('12457')
           await $('#continue').click()
           
           //Checkout success
           await $('#finish').click();
           const confirmation = await $('.complete-header').getText();
           expect(confirmation).toContain('Thank you for your order!');
 
    });
});
