# Variable Plus

Manage variables in a more efficient way. It provides a user-friendly interface to create, edit, and organize variables, making it easier to maintain consistency across your designs.

## Installation

1. First, download Node.js, which includes npm. You can get it from https://nodejs.org/en/download/
2. Install TypeScript globally with `npm install -g typescript`
3. In the plugin directory, install the Figma plugin type definitions with `npm install --save-dev @figma/plugin-typings`
4. Clone this repository
5. Run `npm install`
6. Run `npm run build`

## Local Development

1. Clone the repo and run `npm install` to get typings
2. Run `npm run build` to compile, or `npm run watch` for auto-recompile on save
3. In Figma Desktop, go to **Plugins > Development > Import plugin from manifest** and select the `manifest.json` file
4. The plugin appears under **Plugins > Development**
5. After each rebuild, re-run the plugin to pick up changes

## Usage

1. Run the plugin to scan the existing variables on the file
2. See every raw value and in with layer she was applied to assing a alias
3. Bulk edit values and name of variables
4. Click **Apply** to push changes back to the varible

## Publishing

1. Register a new plugin at [figma.com/developers](https://figma.com/developers) to get a plugin ID
2. Replace `"your-plugin-id-here"` in `manifest.json` with your plugin ID
3. Build and test locally
4. Submit for review via the Figma developer portal
