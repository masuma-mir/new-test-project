describe('logout successfully', () => {
    it('should log out successfully', async () => {
        await browser.url('https://www.saucedemo.com/');
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();
        await $('#react-burger-menu-btn').click();
        await $('#logout_sidebar_link').click();
        
        const usernameValue = await $('#user-name').getValue();
        const passwordValue = await $('#password').getValue();
        expect(usernameValue).toBe('');
        expect(passwordValue).toBe('');
    });
});