// Wait for the popup's HTML content to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    const groupNameInput = document.getElementById('group-name-input');
    const saveGroupBtn = document.getElementById('save-group-btn');
    const groupsListDiv = document.getElementById('groups-list');
  
    // --- 1. Load and Display Existing Groups ---
    // This function runs every time the popup is opened
    function loadGroups() {
      // Clear the current list
      groupsListDiv.innerHTML = '';
  
      // Fetch all items from chrome.storage.local
      chrome.storage.local.get(null, (items) => {
        // 'items' is an object containing all saved groups
        for (const groupName in items) {
          // Create the UI elements for each saved group
          const groupItem = document.createElement('div');
          groupItem.className = 'group-item';
  
          // Create the "Load" button
          const loadBtn = document.createElement('button');
          loadBtn.textContent = groupName;
          loadBtn.className = 'load-btn';
          loadBtn.dataset.groupName = groupName; // Store group name in data attribute
  
          // Create the "Delete" button
          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'X';
          deleteBtn.className = 'delete-btn';
          deleteBtn.dataset.groupName = groupName; // Store group name
  
          // Add elements to the list
          groupItem.appendChild(loadBtn);
          groupItem.appendChild(deleteBtn);
          groupsListDiv.appendChild(groupItem);
  
          // --- 2. Add Event Listener for Loading a Group ---
          loadBtn.addEventListener('click', () => {
            const name = loadBtn.dataset.groupName;
            const urls = items[name]; // Get the array of URLs
  
            // Create a new tab for each URL in the group
            urls.forEach(url => {
              chrome.tabs.create({ url: url });
            });
            window.close(); // Close the popup
          });
  
          // --- 3. Add Event Listener for Deleting a Group ---
          deleteBtn.addEventListener('click', () => {
            const name = deleteBtn.dataset.groupName;
  
            // Remove the group from storage
            chrome.storage.local.remove(name, () => {
              // After removing, refresh the list
              loadGroups();
            });
          });
        }
      });
    }
  
    // --- 4. Add Event Listener for Saving a Group ---
    saveGroupBtn.addEventListener('click', () => {
      const groupName = groupNameInput.value.trim();
      if (!groupName) {
        alert("Please enter a group name.");
        return;
      }
  
      // Query for all tabs in the current window
      // We filter out pinned tabs as users usually want those to stay
      chrome.tabs.query({ currentWindow: true, pinned: false }, (tabs) => {
        // Get just the URLs
        const urls = tabs.map(tab => tab.url);
  
        // Save the group to storage.
        // We use bracket notation [groupName] to set a dynamic key.
        chrome.storage.local.set({ [groupName]: urls }, () => {
          // After saving, clear the input and refresh the list
          groupNameInput.value = '';
          loadGroups();
        });
      });
    });
  
    // Initial load of groups when the popup opens
    loadGroups();
  });