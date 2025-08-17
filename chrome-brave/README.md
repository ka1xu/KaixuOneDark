# KaixuOneDark Theme for Chrome/Brave

A dark theme extension for Chrome and Brave browsers based on the OneDark Pro Night Flat color palette.

## 🎨 Features

- **Dark Theme**: Applies a consistent dark theme to all websites
- **OneDark Pro Colors**: Uses the same color palette as VS Code theme
- **Easy Toggle**: Simple on/off switch in the extension popup
- **Persistent Settings**: Remembers your preference across browser sessions
- **Comprehensive Styling**: Covers forms, tables, code blocks, and more

## 🚀 Installation

### Method 1: Load as Unpacked Extension (Development)

1. Download or clone this repository
2. Open Chrome/Brave and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the `chrome-brave` folder
5. The extension will appear in your extensions list

### Method 2: Install from Chrome Web Store (Coming Soon)

*Note: This extension will be published to the Chrome Web Store soon.*

## 📖 Usage

1. **Enable/Disable**: Click the extension icon in your browser toolbar
2. **Toggle Theme**: Use the switch in the popup to enable/disable the dark theme
3. **Keyboard Shortcut**: Press Space or Enter in the popup to toggle quickly

## 🎯 Color Palette

The theme uses the KaixuOneDark color palette:

- **Background**: `#16191d`
- **Foreground**: `#abb2bf`
- **Red**: `#e05561`
- **Green**: `#8cc265`
- **Blue**: `#4aa5f0`
- **Yellow**: `#d18f52`
- **Purple**: `#c162de`
- **Cyan**: `#42b3c2`
- **Orange**: `#d19a66`
- **Pink**: `#c678dd`

## 🔧 Customization

You can customize the theme by editing the `theme.css` file:

1. Open `chrome-brave/theme.css`
2. Modify the CSS variables in the `:root` section
3. Reload the extension in `chrome://extensions/`

## 📁 File Structure

```
chrome-brave/
├── manifest.json          # Extension configuration
├── theme.css              # Main theme styles
├── popup.html             # Extension popup interface
├── popup.js               # Popup functionality
├── icons/                 # Extension icons (16x16, 32x32, 48x48, 128x128)
└── README.md              # This file
```

## 🐛 Troubleshooting

### Theme not applying to some sites
Some websites use strict Content Security Policy (CSP) that may block the theme. This is normal and expected behavior for security reasons.

### Extension not working
1. Make sure the extension is enabled in `chrome://extensions/`
2. Try refreshing the page
3. Check if the site has its own dark mode that conflicts

### Performance issues
The theme is lightweight and shouldn't affect performance. If you experience issues, try disabling the extension for specific sites.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

- **Author**: ka1xu
- **Repository**: [https://github.com/ka1xu/KaixuOneDark](https://github.com/ka1xu/KaixuOneDark)

## 🔗 Related Projects

- [VS Code Theme](../vscode/)
- [Windows Terminal Theme](../windows-terminal/)
- [Discord Theme](../discord/)

## 📞 Support

If you encounter any issues or have suggestions, please open an issue on the GitHub repository.
