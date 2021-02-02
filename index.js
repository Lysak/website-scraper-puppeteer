// index.js
const scrape = require('website-scraper');
const PuppeteerPlugin = require('website-scraper-puppeteer');
const path = require('path');

scrape({
    // Provide the URL(s) of the website(s) that you want to clone
    // In this example, you can clone the Our Code World website
    urls: ['https://koijapanesefood.chooice.app/'],
    // Specify the path where the content should be saved
    // In this case, in the current directory inside the ourcodeworld dir
    directory: path.resolve(__dirname, 'koijapanesefood'),
    // Load the Puppeteer plugin
    plugins: [
        new PuppeteerPlugin({
            launchOptions: {
                // If you set  this to true, the headless browser will show up on screen
                headless: true
            }, /* optional */
            scrollToBottom: {
                timeout: 10000,
                viewportN: 10
            }, /* optional */
            // args: [
            //     "--no-sandbox",
            //     "--disable-setuid-sandbox",
            //     '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"',
            // ]
        })
    ]
});