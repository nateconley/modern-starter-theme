# Modern Starter Theme for WordPress

This theme is built for modern front end JavaScript, while being framework-agnostic.

Please note, this is a work in progress. Not all features work (yet!)

Features:

- webpack for modern JavaScript modules
- Babel on by default
- Handles sass by default
- Running ```npm run build``` will update your asset versions automatically
- A dev server that will inject JavaScript and CSS changes without reloading the page
- Automatically reload the page for php file changes
- Encode inline images in css files if under 10,000 bytes in size
- Seperate JS files for scripts needed on load and scripts not required before document loads
- Normalize.css included

### Search and Replace:
- STARTER_THEME
- Starter_Theme
- starter-theme
- http://sandbox.dev

A future version will have a script to automatically do this for you!

### Commands:
- ```npm start```: start the dev server
- ```npm run build```: build assets for production