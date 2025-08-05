describe('failed checkout', () => {
    it('should not checkout', async () => {
        await browser.url('https://www.saucedemo.com/');
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

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
           expect(confirmation).toContain('Cart is empty');
 
    });
});
