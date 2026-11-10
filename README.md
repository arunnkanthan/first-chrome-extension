# First Chrome Extension: Copy Link Buttons

A simple Chrome extension that allows you to copy predefined links with the click of a button. Upon clicking the extension icon, a popup will appear with two buttons. Clicking either button copies the associated link to your clipboard. This is a basic project to understand how to create a chrome extension

## Features

- Click the extension icon to open a popup with two buttons.
- Each button copies a specific URL to your clipboard.
- Simple and user-friendly interface for quickly sharing links.

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



## Future Add-Ons

- **Tailwind CSS**: Implement Tailwind CSS styling. The point of this is to have some experience/exposure to that CSS framework and make this extension prettier.
- **Implement React**: Implement React. This is a separte procedure to implement React and will need to investigate further into this.
- **Add Config File**: The links right now are hardcoded/static to MY needs. Add a config file so that anyone can add any amount of links to copy/paste (aka make it dynamic)
- **Add to Chrome Web Store**: FIgure out how to add this to the Chrome Web Store. Keep in mind of the add-ons before this because you'll need a step for someone to add thier own 'config file' via a setup procedure. This future feature is also a way for you to learn how to upload extensions to Chrome.