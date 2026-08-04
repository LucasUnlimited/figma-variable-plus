# Variable Plus

Manage variables in a more efficient way. It provides a user-friendly interface to create, edit, and organize variables, making it easier to maintain consistency across your designs.

## Installation

1. Clone this repository
2. Run `npm install`
3. Run `npm run build`

## Local Development

1. Clone the repo and run `npm install` to get typings
2. Run `npm run build` to compile, or `npm run watch` for auto-recompile on save
3. In Figma Desktop, go to **Plugins > Development > Import plugin from manifest** and select the `manifest.json` file
4. The plugin appears under **Plugins > Development**
5. After each rebuild, re-run the plugin to pick up changes

## Usage

1. Select one or more layers containing component instances
2. Run the plugin — it scans for instances with text properties and displays them in a table
3. Edit values inline, or use Export/Import CSV for bulk editing in a spreadsheet
4. Click **Apply** to push changes back to the instances

## Publishing

1. Register a new plugin at [figma.com/developers](https://figma.com/developers) to get a plugin ID
2. Replace `"your-plugin-id-here"` in `manifest.json` with your plugin ID
3. Build and test locally
4. Submit for review via the Figma developer portal
