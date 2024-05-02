
const { browser, expect, $ } = require('@wdio/globals');

describe('Cart Flow', () => {
    before(async () => {
        await browser.url('/');
        const searchInput = await $('#twotabsearchtextbox');
        const searchButton = await $('input[type="submit"]');
        await searchInput.addValue('macbook');
        await searchButton.click();
        await browser.pause(5000);
    });

    it('Add to Cart', async () => {
        await $('.s-product-image-container').click();
        const handles = await browser.getWindowHandles();

// Switch to the new tab/window (assuming it's the last one)
await browser.switchToWindow(handles[handles.length - 1]);

// Now you can find elements in the new tab/window using XPath
const elementInNewTab = await $('#add-to-cart-button');

// Perform actions on the element in the new tab/window
await elementInNewTab.click();

(await $('#attach-sidesheet-checkout-button')).click();

        // const devicePrice = await $('#corePrice_desktop span [aria-hidden="true"]').getText();
        // await $('#add-to-cart-button').click();
        await browser.pause(5000);
    });
});
