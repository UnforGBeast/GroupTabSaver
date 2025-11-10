# 📑 Tab Group Saver

!A simple Chrome extension to save, load, and manage groups of tabs with one click. Stop wasting time manually opening the same set of tabs every day!

## ✨ About The Project

This extension was built to solve a simple problem: we often use the same set of websites for specific tasks (like "Work," "Social," or "Project Research"). This tool lets you:

* **Save** all your currently open tabs into a named group.
* **Load** that entire group of tabs into a new window with a single click.
* **Delete** groups you no longer need.

It's built with lightweight, plain JavaScript, HTML, and CSS for maximum speed and zero dependencies.

## 🚀 Installation

Since this extension is not (yet) on the Chrome Web Store, you need to load it manually using Developer Mode.

1.  **Download:** Download this project's code. You can either:
    * Click the green "Code" button on this GitHub page and select **"Download ZIP"**.
    * Or, if you have Git, clone the repository:
        ```bash
        git clone [https://github.com/UnforGBeast/GroupTabSaver.git](https://github.com/UnforGBeast/GroupTabSaver.git)
        ```

2.  **Unzip:** Unzip the downloaded folder. You should now have a folder named `TabGroupSaver` (or similar) containing files like `manifest.json`.

3.  **Open Chrome Extensions:** In your Chrome browser, navigate to `chrome://extensions`.

4.  **Enable Developer Mode:** In the top-right corner of the extensions page, flip the switch labeled **"Developer mode"** to the **ON** position.

5.  **Load Unpacked:** You will now see three new buttons. Click the **"Load unpacked"** button.

6.  **Select the Folder:** A file dialog will open. Navigate to the `TabGroupSaver` folder you unzipped (the one that directly contains `manifest.json`), and click **"Select Folder"**.

The extension is now installed! You will see its icon in your Chrome toolbar (you may need to click the puzzle-piece icon to find and pin it).

## 📖 How to Use

Using the extension is simple:

### 1. To Save a Group
* Open all the tabs you want to be in your group (e.g., Gmail, Notion, Calendar).
* Click the "Tab Group Saver" icon in your toolbar.
* In the popup, type a name for your group (e.g., "Work") into the input box.
* Click the blue **"Save"** button.
* Your group will now appear in the "Load Group" list.

### 2. To Load a Group
* Click the extension icon.
* Find the group you want to open in the list.
* Click the green button with your group's name (e.g., **"Work"**).
* All the tabs you saved to that group will instantly open.

### 3. To Delete a Group
* Click the extension icon.
* Find the group you want to remove.
* Click the red **"X"** button next to its name. The group will be permanently deleted.

## 📁 Project Structure

For those interested in the code:
TabGroupSaver/ 
├── icons/ # Extension icons (16x16, 48x48, 128x128) 
├── manifest.json # The extension's "blueprint" and permissions 
├── popup.html # The popup UI structure (HTML) 
├── popup.css # The popup UI styling (CSS) 
└── popup.js # The core application logic (JavaScript)

## 🤝 Contributing

Contributions are welcome! If you have an idea for a feature or find a bug:

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request


Made with ❤️ by [UnforGBeast]
