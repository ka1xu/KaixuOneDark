# KaixuOneDark Theme for Chrome/Brave

A simple browser UI theme (not a content-script extension) for Chrome and Brave based on the OneDark Pro Night Flat palette.

## 🎨 What it themes

- **Frame/Toolbar/Tabs**: Browser chrome (window frame, toolbar background, tab text)
- **Omnibox**: Address bar background and text
- **NTP**: New Tab Page base colors (where applicable)

## 🚀 Install (unpacked theme)

1. Download or clone this repository
2. Open Chrome/Brave and go to `chrome://extensions/`
3. Enable "Developer mode" (top right)
4. Click "Load unpacked" and select the `chrome-brave` folder
5. The theme applies to the browser UI instantly

## 📖 Usage

- To revert: `chrome://settings/appearance` → Theme → Reset to default

## 🎯 Color Palette

The browser UI uses the KaixuOneDark palette:

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

## 🔧 Customize

Edit `manifest.json` color values under `theme.colors` and reload in `chrome://extensions/`.

## 📁 Files

```
chrome-brave/
├── manifest.json          # Theme manifest with colors
└── README.md              # This file
```

## 🐛 Troubleshooting

### Theme didn’t load
- Ensure you loaded the `chrome-brave` folder via "Load unpacked"
- Confirm `manifest.json` contains a `theme` block

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
