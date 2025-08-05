describe('Valid Login', () => {
    it('should log in successfully', async () => {
        await browser.url('https://www.saucedemo.com/');
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('PasswordnotCorrect');
        await $('#login-button').click();
 
    });
});
