describe('login failed', () => {
    it('should not login with invalid login', async () => {
        await browser.url('https://www.saucedemo.com/');
        await $('#user-name').setValue('standarD_user'); // Invalid username
        await $('#password').setValue('secret_sauce'); // Valid password
        await $('#login-button').click();

        const usernameErrorIcon = await $('.form_group .input_error.form_input[placeholder="Username"] + svg');
        const passwordErrorIcon = await $('.form_group .input_error.form_input[placeholder="Password"] + svg');

        await expect(usernameErrorIcon).toBeDisplayed();
        await expect(passwordErrorIcon).toBeDisplayed();

        const errorMessage = await $('.error-message-container');
        await expect(errorMessage).toBeDisplayed();
        await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });
});
