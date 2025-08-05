describe('sorting', () => {
    it('should sort products ', async () => {
        await browser.url('https://www.saucedemo.com/');
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();
 

        // Click sorting dropdow
        const sortDropdown = await $('.product_sort_container');
        await sortDropdown.selectByVisibleText('Price (low to high)');

        // Get all product prices
        const priceElements = await $$('.inventory_item_price');
        const prices = [];

        for (const priceEl of priceElements) {
            const text = await priceEl.getText(); 
            prices.push(parseFloat(text.replace('$', '')));
        }

        // Check if sorted by price
        const sortedPrices = [...prices].sort((a, b) => a - b);
        expect(prices).toEqual(sortedPrices);

        await sortDropdown.selectByVisibleText('Name (Z to A)');

        // Get all product names
        const nameElements = await $$('.inventory_item_name');
        const names = [];

        for (const nameEl of nameElements) {
            names.push(await nameEl.getText());
        }

        // Verify names are sorted descending (Z → A)
        const sortedNames = [...names].sort((a, b) => b.localeCompare(a));
        expect(names).toEqual(sortedNames);
    });
});

