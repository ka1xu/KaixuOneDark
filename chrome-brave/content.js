// KaixuOneDark Theme Extension - Content Script

(function() {
    'use strict';

    let themeEnabled = true;
    let styleElement = null;

    // Initialize theme
    function initTheme() {
        // Check if theme should be enabled
        chrome.storage.sync.get(['themeEnabled'], function(result) {
            themeEnabled = result.themeEnabled !== undefined ? result.themeEnabled : true;
            if (themeEnabled) {
                applyTheme();
            }
        });
    }

    // Apply the dark theme
    function applyTheme() {
        if (styleElement) {
            return; // Theme already applied
        }

        // Create style element
        styleElement = document.createElement('style');
        styleElement.id = 'kaixuonedark-theme';
        styleElement.textContent = getThemeCSS();
        
        // Insert at the beginning of head
        if (document.head) {
            document.head.insertBefore(styleElement, document.head.firstChild);
        } else {
            document.documentElement.appendChild(styleElement);
        }

        // Add theme class to body
        document.body.classList.add('kaixuonedark-theme');
    }

    // Remove the dark theme
    function removeTheme() {
        if (styleElement) {
            styleElement.remove();
            styleElement = null;
        }
        
        // Remove theme class from body
        document.body.classList.remove('kaixuonedark-theme');
    }

    // Get the theme CSS
    function getThemeCSS() {
        return `
            /* KaixuOneDark Theme - Injected Styles */
            :root {
                --background: #16191d !important;
                --foreground: #abb2bf !important;
                --red: #e05561 !important;
                --green: #8cc265 !important;
                --blue: #4aa5f0 !important;
                --yellow: #d18f52 !important;
                --purple: #c162de !important;
                --cyan: #42b3c2 !important;
                --orange: #d19a66 !important;
                --pink: #c678dd !important;
                --gray: #5c6370 !important;
                --light-gray: #7f848e !important;
                --dark-gray: #2c313c !important;
                --border: #3e4452 !important;
                --selection: #67769660 !important;
                --link: #61afef !important;
                --visited: #c678dd !important;
                --code-bg: #1e2227 !important;
                --quote-bg: #2e3440 !important;
                --quote-border: #4b5362 !important;
            }

            /* Global overrides */
            * {
                background-color: var(--background) !important;
                color: var(--foreground) !important;
                border-color: var(--border) !important;
            }

            /* Body and HTML */
            html, body {
                background-color: var(--background) !important;
                color: var(--foreground) !important;
            }

            /* Headers */
            h1, h2, h3, h4, h5, h6 {
                color: var(--red) !important;
            }

            /* Links */
            a {
                color: var(--link) !important;
            }

            a:visited {
                color: var(--visited) !important;
            }

            a:hover {
                color: var(--blue) !important;
            }

            /* Code blocks */
            code, pre {
                background-color: var(--code-bg) !important;
                color: var(--foreground) !important;
                border: 1px solid var(--border) !important;
            }

            /* Inline code */
            code:not(pre code) {
                background-color: var(--dark-gray) !important;
                color: var(--orange) !important;
                padding: 2px 4px !important;
                border-radius: 3px !important;
            }

            /* Blockquotes */
            blockquote {
                background-color: var(--quote-bg) !important;
                border-left: 4px solid var(--quote-border) !important;
                padding: 10px 20px !important;
                margin: 10px 0 !important;
            }

            /* Tables */
            table {
                background-color: var(--background) !important;
                border-collapse: collapse !important;
            }

            th, td {
                background-color: var(--background) !important;
                border: 1px solid var(--border) !important;
                padding: 8px 12px !important;
            }

            th {
                background-color: var(--dark-gray) !important;
                color: var(--orange) !important;
            }

            /* Forms */
            input, textarea, select, button {
                background-color: var(--code-bg) !important;
                color: var(--foreground) !important;
                border: 1px solid var(--border) !important;
            }

            input:focus, textarea:focus, select:focus {
                border-color: var(--blue) !important;
                outline: none !important;
            }

            button {
                background-color: var(--dark-gray) !important;
                color: var(--foreground) !important;
                border: 1px solid var(--border) !important;
                padding: 8px 16px !important;
                cursor: pointer !important;
            }

            button:hover {
                background-color: var(--border) !important;
            }

            /* Navigation */
            nav, .nav, .navigation {
                background-color: var(--dark-gray) !important;
                border-bottom: 1px solid var(--border) !important;
            }

            /* Sidebars */
            aside, .sidebar, .side-panel {
                background-color: var(--dark-gray) !important;
                border-right: 1px solid var(--border) !important;
            }

            /* Cards and containers */
            .card, .container, .box, .panel {
                background-color: var(--code-bg) !important;
                border: 1px solid var(--border) !important;
                border-radius: 4px !important;
            }

            /* Selection */
            ::selection {
                background-color: var(--selection) !important;
            }

            /* Scrollbars */
            ::-webkit-scrollbar {
                width: 12px !important;
                height: 12px !important;
            }

            ::-webkit-scrollbar-track {
                background-color: var(--background) !important;
            }

            ::-webkit-scrollbar-thumb {
                background-color: var(--border) !important;
                border-radius: 6px !important;
            }

            ::-webkit-scrollbar-thumb:hover {
                background-color: var(--light-gray) !important;
            }

            /* Modal dialogs */
            .modal, .dialog, .popup {
                background-color: var(--code-bg) !important;
                border: 1px solid var(--border) !important;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5) !important;
            }

            /* Tooltips */
            .tooltip, [title] {
                background-color: var(--code-bg) !important;
                color: var(--foreground) !important;
                border: 1px solid var(--border) !important;
            }

            /* Status bars and footers */
            .status-bar, .footer, .status {
                background-color: var(--dark-gray) !important;
                border-top: 1px solid var(--border) !important;
            }

            /* Error messages */
            .error, .alert-error {
                background-color: rgba(224, 85, 97, 0.1) !important;
                color: var(--red) !important;
                border: 1px solid var(--red) !important;
            }

            /* Warning messages */
            .warning, .alert-warning {
                background-color: rgba(209, 154, 102, 0.1) !important;
                color: var(--yellow) !important;
                border: 1px solid var(--yellow) !important;
            }

            /* Success messages */
            .success, .alert-success {
                background-color: rgba(140, 194, 101, 0.1) !important;
                color: var(--green) !important;
                border: 1px solid var(--green) !important;
            }

            /* Info messages */
            .info, .alert-info {
                background-color: rgba(74, 165, 240, 0.1) !important;
                color: var(--blue) !important;
                border: 1px solid var(--blue) !important;
            }

            /* Checkboxes and radio buttons */
            input[type="checkbox"], input[type="radio"] {
                accent-color: var(--blue) !important;
            }

            /* Range sliders */
            input[type="range"] {
                background-color: var(--dark-gray) !important;
            }

            input[type="range"]::-webkit-slider-thumb {
                background-color: var(--blue) !important;
            }

            /* File inputs */
            input[type="file"] {
                background-color: var(--code-bg) !important;
                border: 2px dashed var(--border) !important;
            }

            /* Disabled elements */
            *:disabled, .disabled {
                opacity: 0.5 !important;
                cursor: not-allowed !important;
            }

            /* Focus indicators */
            *:focus {
                outline: 2px solid var(--blue) !important;
                outline-offset: 2px !important;
            }
        `;
    }

    // Listen for messages from popup
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.action === 'enableTheme') {
            themeEnabled = true;
            applyTheme();
            sendResponse({ success: true });
        } else if (request.action === 'disableTheme') {
            themeEnabled = false;
            removeTheme();
            sendResponse({ success: true });
        }
    });

    // Initialize theme when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }

    // Handle dynamic content changes
    const observer = new MutationObserver(function(mutations) {
        if (themeEnabled && styleElement && !document.contains(styleElement)) {
            // Style element was removed, reapply
            applyTheme();
        }
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });

})();
