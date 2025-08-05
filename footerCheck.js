describe('Valid Login', () => {
    it('should log in successfully', async () => {
        await browser.url('https://www.saucedemo.com/');
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('PasswordnotCorrect');
        await $('#login-button').click();
 
        //Locate footer social icons
        const twitterLink = await $('.social_twitter a');
        const facebookLink = await $('.social_facebook a');
        const linkedinLink = await $('.social_linkedin a');

        // Assert each link is displayed
        await expect(twitterLink).toBeDisplayed();
        await expect(facebookLink).toBeDisplayed();
        await expect(linkedinLink).toBeDisplayed();

        // Assert each link has correct href
        await expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/saucelabs');
        await expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/saucelabs');
        await expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/company/sauce-labs/');
    
    });
});
