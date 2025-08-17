// KaixuOneDark Theme Extension - Popup Script

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const statusDiv = document.getElementById('status');

    // Load saved state
    chrome.storage.sync.get(['themeEnabled'], function(result) {
        const isEnabled = result.themeEnabled !== undefined ? result.themeEnabled : true;
        themeToggle.checked = isEnabled;
        updateStatus(isEnabled);
    });

    // Handle toggle changes
    themeToggle.addEventListener('change', function() {
        const isEnabled = themeToggle.checked;
        
        // Save state
        chrome.storage.sync.set({ themeEnabled: isEnabled });
        
        // Update status
        updateStatus(isEnabled);
        
        // Send message to content script
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            if (tabs[0]) {
                chrome.tabs.sendMessage(tabs[0].id, {
                    action: isEnabled ? 'enableTheme' : 'disableTheme'
                });
            }
        });
    });

    function updateStatus(isEnabled) {
        if (isEnabled) {
            statusDiv.textContent = 'Theme is currently enabled';
            statusDiv.className = 'status enabled';
        } else {
            statusDiv.textContent = 'Theme is currently disabled';
            statusDiv.className = 'status disabled';
        }
    }

    // Add some nice animations
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.2s ease';
    });

    logo.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            themeToggle.click();
        }
    });
});
