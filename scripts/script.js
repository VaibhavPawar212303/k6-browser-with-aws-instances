import { browser } from 'k6/browser';

export const options = {
  scenarios: {
    browser: {
      executor: 'shared-iterations',
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
};

export default async function () {
  // Launch the browser in headed mode
  const context = await browser.newContext();
  const page = await context.newPage();
  try {
    await page.goto('https://stage-blue.stagescoreboard.clippd.com/home');
  } finally {
    await page.close();
  }
}
