const puppeteer = require('puppeteer');


(async () => {
    require('dotenv').config()

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(process.env.DISCORD_CHANNEL_URL);

    await page.type("input[name='email']", process.env.EMAIL)
    await page.type("input[name='password']", process.env.PASSWORD)
    await page.click("button[type='submit']");

    await page.waitForNavigation()

    await new Promise(r => setTimeout(r, 2000));

    const example = "#app-mount > div.app-1q1i1E > div > div.layers-3iHuyZ.layers-3q14ss > div > div > div > div.content-98HsJk > div.chat-3bRxxu > div > main > form > div > div > div > div > div.textArea-12jD-V.textAreaSlate-1ZzRVj.slateContainer-3Qkn2x > div.markup-2BOw-j.slateTextArea-1Mkdgw.fontSize16Padding-3Wk7zP > div"
    while (true) {
        console.log('hello')
        const element = "Farming XP msg"
        await page.type(example, element)
        await page.keyboard.press('Enter')
        await new Promise(r => setTimeout(r, 62000));

    }
    // await page.screenshot({ path: 'example.png' });

    await browser.close();
})();