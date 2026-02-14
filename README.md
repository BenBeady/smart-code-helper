Smart Code Helper

Smart Code Helper is an AI-powered Chrome Extension that extracts code from any webpage and sends it to OpenAI for intelligent analysis.

The extension automatically detects <pre> and <code> blocks on a page and provides:

• Code corrections
• Clear explanations
• Suggested improvements
• Unit test generation

It is built using Chrome Manifest V3 and the OpenAI API.

🚀 Features

Global hotkey activation (Ctrl + Shift + Space)

Automatic code block extraction from any webpage

Removes comments before sending code to AI

Chrome Side Panel UI for displaying results

Secure local API key storage using Chrome Sync Storage

Handles dynamic script injection safely

🧠 How It Works

User presses the hotkey.

The extension scans the current page for <pre> and <code> blocks.

Comments are stripped from extracted code.

Code is sent to OpenAI via the Chat Completions API.

AI response is displayed in the Chrome Side Panel.

🛠 Tech Stack

JavaScript (ES Modules)

Chrome Extension Manifest V3

Chrome Side Panel API

Chrome Storage API

OpenAI Chat Completions API

DOM Parsing

📁 Project Structure
manifest.json   → Extension configuration
background.js   → Service worker logic + OpenAI API call
content.js      → Code extraction + comment stripping
panel.html      → Side panel UI
panel.js        → UI interaction + state handling
