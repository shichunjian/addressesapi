const puppeteer = require('puppeteer');

async function visitWebsites() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // 访问 free.com
  await page.goto('https://free-net123.serv00.net/');
  console.log('Visited free-net123.serv00.net');

  // 访问 open.net
  await page.goto('https://microke.serv00.net/');
  console.log('Visited microke.serv00.net');

  await browser.close();
}

visitWebsites().catch(err => {
  console.error('Error occurred:', err);
});
