const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

/**
 * GOOGLE INDEXING API SCRIPT
 * -------------------------
 * This script allows you to request instant indexing for your website pages.
 * 
 * PREREQUISITES:
 * 1. Create a Google Cloud Project and enable 'Indexing API'.
 * 2. Create a Service Account, download the JSON Key, and rename it to 'service-account.json'.
 * 3. Place 'service-account.json' in this folder (scripts/).
 * 4. Add the Service Account email as an 'Owner' in Google Search Console.
 */

// 1. Load Credentials
const KEY_FILE = path.join(__dirname, 'service-account.json');

if (!fs.existsSync(KEY_FILE)) {
  console.error('\x1b[31mError: service-account.json not found in scripts/ directory.\x1b[0m');
  console.log('Please follow the instructions in scripts/README_INDEXING.md to set up your credentials.');
  process.exit(1);
}

const auth = new google.auth.GoogleAuth({
  keyFile: KEY_FILE,
  scopes: ['https://www.googleapis.com/auth/indexing'],
});

const indexing = google.indexing('v3');

// 2. Define URLs to Index
const BASE_URL = 'https://pixeltattoos.in';

// Static routes
const routes = [
  '/',
  '/about',
  '/tattoo-categories',
  '/faq',
  '/blog',
  '/styles',
];

// Helper to add categories (Synced with sitemap.ts)
const categories = [
  "/tattoo-categories/custom-tattoo",
  "/tattoo-categories/minimalist-tattoos",
  "/tattoo-categories/fine-line-tattoos",
  "/tattoo-categories/black-and-grey-tattoos",
  "/tattoo-categories/cover-up-tattoos",
  "/tattoo-categories/tattoo-removal",
  "/tattoo-categories/realism-tattoos",
  "/tattoo-categories/small-tattoos",
  "/tattoo-categories/religious-tattoos",
  "/tattoo-categories/geometric-tattoos",
  "/tattoo-categories/travel-tattoos",
  "/tattoo-categories/animal-tattoos",
  "/tattoo-categories/calligraphy-tattoos",
  "/tattoo-categories/couple-tattoos",
  "/tattoo-categories/dot-work-tattoos",
  "/tattoo-categories/color-tattoos"
];

const urlsToIndex = [
  ...routes.map(r => r === '/' ? BASE_URL : `${BASE_URL}${r}`),
  ...categories.map(c => `${BASE_URL}${c}`)
];

// 3. Main Execution Function
async function indexPages() {
  console.log(`\x1b[36mStarting indexing for ${urlsToIndex.length} URLs...\x1b[0m\n`);

  for (const url of urlsToIndex) {
    try {
      const response = await indexing.urlNotifications.publish({
        auth,
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      console.log(`\x1b[32m[SUCCESS]\x1b[0m Indexed: ${url}`);
    } catch (error) {
      console.error(`\x1b[31m[FAILED]\x1b[0m  ${url}: ${error.message}`);
      if (error.message.includes('permission')) {
        console.log('\x1b[33mTip: Make sure the Service Account email is added as an OWNER in Search Console.\x1b[0m');
        break; 
      }
    }
    // Small delay to avoid hitting rate limits too fast
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log('\n\x1b[36mIndexing request sequence completed.\x1b[0m');
}

indexPages();
