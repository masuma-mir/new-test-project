describe('footer check', () => {
    it('should redirect to social media accounts', async () => {
        await browser.url('https://www.saucedemo.com/');
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        await $('#inventory_container').waitForDisplayed({ timeout: 9000 });
        const footer = await $('.footer');
        await footer.waitForExist({ timeout: 10000 });
        await footer.scrollIntoView();


        const twitterLink = await $('a.social_twitter');
        await twitterLink.waitForExist({ timeout: 9000 });
        await twitterLink.waitForDisplayed({ timeout: 5000 });

        const facebookLink = await $('a.social_facebook');
        await facebookLink.waitForExist({ timeout: 9000 });
        await facebookLink.waitForDisplayed({ timeout: 5000 });

        const linkedinLink = await $('a.social_linkedin');
        await linkedinLink.waitForExist({ timeout: 9000 });
        await linkedinLink.waitForDisplayed({ timeout: 5000 });

        await twitterLink.scrollIntoView();

        await expect(twitterLink).toBeDisplayed();
        await expect(facebookLink).toBeDisplayed();
        await expect(linkedinLink).toBeDisplayed();

        await expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/saucelabs');
        await expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/saucelabs');
        await expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/company/sauce-labs/');

        await twitterLink.click();

        const handles = await browser.getWindowHandles();
        expect(handles.length).toBeGreaterThan(1);

        await browser.switchToWindow(handles[1]);

        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('twitter.com/saucelabs'),
            {
                timeout: 10000,
                timeoutMsg: 'Twitter page did not load in time',
            }
        );

        await expect(browser).toHaveUrlContaining('twitter.com/saucelabs');

        // Close Twitter tab and switch back to original tab
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
    });
});
