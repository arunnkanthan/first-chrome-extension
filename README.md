# First Chrome Extension: Job Search Tracker

A Chrome Exntesion that post job application details to be stored in a google sheet.

## Setup

### Clone the repository
```bash
git clone git@github.com:arunnkanthan/first-chrome-extension.git
```

## Load the extension into Chrome | Step-by-Step Guide
1. **Open Chrome** and navigate to the **Extensions** page:
   - Type `chrome://extensions/` in your browser's address bar and press Enter.

2. **Enable Developer Mode**:
   - In the top-right corner of the Extensions page, toggle the **Developer mode** switch to **ON**.

3. **Load Unpacked Extension**:
   - Click the **Load unpacked** button that appears once Developer mode is enabled.

4. **Select the Extension Folder**:
   - In the file dialog, navigate to the folder where you cloned or saved this extension project, and select the folder containing the extension files (the root folder that contains `manifest.json`, `popup.html`, etc.).

5. **Extension Loaded**:
   - The extension will now appear in your list of installed extensions, and the icon will be added to the Chrome toolbar.

6. **Testing the Extension**:
   - Click the extension icon in the Chrome toolbar to open the popup.
   - The two buttons should appear, and you can click them to copy the links to your clipboard.



## Connect to Google Sheets (job tracker)

The job form in the popup saves each job as a new row in the `2026_job_search` tab of the job search spreadsheet. The extension doesn't sign in to Google itself. Instead, it POSTs the job to a small **Google Apps Script web app** attached to the spreadsheet, and that script writes the row.

```
Popup form  --POST (JSON + secret)-->  Apps Script web app (/exec)  -->  2026_job_search tab
```

### What gets written

| Column | Value |
|---|---|
| A Date | Today's date (MM/DD/YYYY) |
| B Company | Company Name |
| C Position | `=HYPERLINK(url, position)` |
| D Job board | Job Board |
| E Progress | *(left blank)* |
| F End Date | *(left blank)* |
| G Work Location | REMOTE / HYBRID / ONSITE |
| H Notes | Any notes |

The script adds the job on the row after the last filled **Company** cell (data starts at row 3; row 2 is the header). It rejects duplicates (same URL, or same company and position) and stops if the header row has changed.

### 1. Add the script to the spreadsheet

1. Open the spreadsheet, then go to **Extensions → Apps Script**.
2. Replace the editor contents with [`apps-script/Code.gs`](apps-script/Code.gs) and save.
3. Click the gear icon (**Project Settings**), scroll to **Script Properties**, and add:
   - Property: `SHARED_SECRET`
   - Value: a long random string (for example, run `python3 -c "import secrets;print(secrets.token_urlsafe(32))"`)

### 2. Deploy it as a web app

1. Click **Deploy → New deployment**, click the gear icon next to "Select type", and choose **Web app**.
2. Set **Execute as: Me** and **Who has access: Anyone**, then click **Deploy**.
   - Google will warn that the app isn't verified. Click **Advanced → Go to (project name)** and allow it. That's expected for your own script.
   - "Anyone" only means the URL works without a Google sign-in. A request can't write anything without the secret.
3. Copy the **Web app URL**, which ends in `/exec` (not the Deployment ID by itself, and not the `/dev` test URL).
4. Check it: open the URL in a browser. You should see `{"ok":true,"sheet":"2026_job_search"}`.

### 3. Configure the extension

1. Copy `config.example.js` to `config.js`. (`config.js` is gitignored, so the URL and secret stay out of GitHub.)
2. Fill in both values:
   ```js
   const SHEETS_CONFIG = {
     webAppUrl: 'https://script.google.com/macros/s/<deployment-id>/exec',
     secret: '<same value as SHARED_SECRET>',
   };
   ```
3. Go to `chrome://extensions` and click the reload icon on the extension.
4. Open the popup, fill in the form, and click **Submit**. You should see `Saved to row N ✓`.

### Updating the script later

Saving `Code.gs` alone doesn't change the live web app. Go to **Deploy → Manage deployments**, click the pencil icon, set **Version: New version**, and click **Deploy**. The `/exec` URL stays the same, so `config.js` doesn't change.

### Troubleshooting

| Message in the popup | Fix |
|---|---|
| `Set webAppUrl and secret in config.js` | `config.js` is missing or still has the placeholder values |
| `Unauthorized: secret missing or wrong` | The `secret` in `config.js` doesn't match the `SHARED_SECRET` script property |
| `Already in the sheet (row N)` | That job is already tracked |
| `Header row changed: ...` | The header row (row 2) was edited; update `EXPECTED_HEADERS` in `Code.gs` and redeploy |
| `Unexpected token '<'` / HTML instead of JSON | The URL is wrong, or the deployment's access isn't set to **Anyone** |

**Note:** the popup closes if you click outside it, which cancels a save in progress. Wait for the "Saved" message first.

## Future Add-Ons

- **Tailwind CSS**: Implement Tailwind CSS styling. The point of this is to have some experience/exposure to that CSS framework and make this extension prettier.
- **Implement React**: Implement React. This is a separte procedure to implement React and will need to investigate further into this.
- **Add Config File**: The links right now are hardcoded/static to MY needs. Add a config file so that anyone can add any amount of links to copy/paste (aka make it dynamic)
- **Add to Chrome Web Store**: FIgure out how to add this to the Chrome Web Store. Keep in mind of the add-ons before this because you'll need a step for someone to add thier own 'config file' via a setup procedure. This future feature is also a way for you to learn how to upload extensions to Chrome.