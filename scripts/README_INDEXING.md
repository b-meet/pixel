# Google Indexing API Setup Guide

This guide will help you set up the Google Indexing API so you can force Google to index your tattoo studio's pages instantly.

## 1. Google Cloud Console Setup
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project (e.g., `Pixel Tattoo Indexing`).
3. Search for **"Indexing API"** in the top search bar and click **Enable**.
4. Go to **IAM & Admin > Service Accounts**.
5. Click **Create Service Account**.
   - Give it a name (e.g., `indexing-bot`).
   - Click **Create and Continue**.
   - Grant it the role of **Owner** (or just click continue/done).
6. Once created, click on the **Service Account Email** to open its details.
7. Go to the **Keys** tab, click **Add Key > Create New Key**, select **JSON**, and download it.
8. **CRITICAL**: Rename the downloaded file to `service-account.json` and move it into the `scripts/` folder of this project.

## 2. Google Search Console Setup
1. Copy the **Email Address** of your Service Account (e.g., `indexing-bot@project-id.iam.gserviceaccount.com`).
2. Open [Google Search Console](https://search.google.com/search-console).
3. Select your property (`https://pixeltattoos.in`).
4. Go to **Settings > Users and Permissions**.
5. Click **Add User**.
6. Paste the Service Account email and set the Permission to **Owner**.
   - *Note: It MUST be 'Owner' for the Indexing API to work.*

## 3. Running the Script
Open your terminal in the project root and run:
```bash
node scripts/index-pages.js
```

## 4. Troubeshooting
- **Permission Denied**: Double-check that you added the Service Account as an **Owner** in Search Console, not just a User.
- **Quota Exceeded**: Google allows 200 requests per day by default. The script handles ~40-50 pages, so you should be well within the limit.
