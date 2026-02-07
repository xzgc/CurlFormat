# CurlFormat

**Professional curl command formatter for Visual Studio Code**

Transform messy curl commands into clean, readable, multi-line format with ease.

## ✨ Features

- **One-Click Formatting** - Format entire `.curl` files instantly
- **Smart Selection** - Format selected ranges of curl commands
- **Comprehensive Support** - Handles all standard curl flags and options
- **Auto Line Breaking** - Intelligent multi-line formatting with backslash continuation
- **Clean Output** - Transforms complex one-liners into readable, structured commands

## Usage

1. Open or create a `.curl` file
2. Press `Shift + Alt + F` (Windows/Linux) or `Shift + Option + F` (Mac) to format the entire document
3. Or select a range of text and use the format command to format only the selection

### Example

**Before:**
```
curl 'https://api.example.com/users' -H 'Authorization: Bearer token123' -H 'Content-Type: application/json' -d '{"name":"John","age":30}'
```

**After:**
```
curl 'https://api.example.com/users' \
 -H 'Authorization: Bearer token123' \
 -H 'Content-Type: application/json' \
 -d '{"name":"John","age":30}'
```

## Installation

1. Build the extension:
   ```bash
   npm install
   npm run compile
   ```

2. Package the extension:
   ```bash
   npm install -g vsce
   vsce package
   ```

3. Install the `.vsix` file in VSCode

## Development

- Run `npm run watch` to compile in watch mode
- Press `F5` in VSCode to launch Extension Development Host

## License

MIT
