# Variable Plus - Figma Plugin

[![Figma Mode](https://img.shields.io/badge/Figma-Design-blue)](https://figma.com)
[![Language](https://img.shields.io/badge/Language-Javascript-language)](https://web.dev/javascript)
[![Framework](https://img.shields.io/badge/Framework-Typescript-orange)](https://www.typescriptlang.org/)

**Variable Plus** is a plugin for Figma Design to manage variables in a more efficient way. It provides a user-friendly interface to create, edit, and organize variables, making it easier to maintain consistency across your designs.

<img width="235" height="303" alt="image" src="https://github.com/user-attachments/assets/49e6dece-3c25-4811-a1ee-2ffd1b2886f3" />
<img width="235" height="303" alt="image" src="https://github.com/user-attachments/assets/c2625a7c-421a-4d37-b400-a157e7323af8" />
<img width="235" height="303" alt="image" src="https://github.com/user-attachments/assets/9ac9e36f-4fc5-4db1-9938-a417924c9158" />
<img width="235" height="303" alt="image" src="https://github.com/user-attachments/assets/098dcf13-632c-4c04-bcc0-f78074783a62" />

---

## 🛠️ Local Development

1. First, download Node.js, which includes npm. You can get it from https://nodejs.org/en/download/
2. Install TypeScript globally with `npm install -g typescript`
3. In the plugin directory, install the Figma plugin type definitions with `npm install --save-dev @figma/plugin-typings`
4. Clone this repository
5. Run `npm install`
6. Run `npm run build` to compile, or `npm run watch` for auto-recompile on save
7. In Figma Desktop, go to **Plugins > Development > Import plugin from manifest** and select the `manifest.json` file
8. The plugin appears under **Plugins > Development**
9. After each rebuild, re-run the plugin to pick up changes

---

## 🎮 How to use

1. Run the plugin to scan the existing variables on the file
2. See every raw value and in with layer she was applied to assing a alias
3. Bulk edit values and name of variables
4. Click **Apply** to push changes back to the varible

---

## 🚀 How to publish

1. Register a new plugin at [figma.com/developers](https://figma.com/developers) to get a plugin ID
2. Replace `"your-plugin-id-here"` in `manifest.json` with your plugin ID
3. Build and test locally
4. Submit for review via the Figma developer portal

---

## 📝 License

This project is open source and available for personal use and modification under the MIT license. Feel free to contribute UI improvements or new data organization logic!
