/**
 * Replaces the PHP constant in functions.php with the current timestamp
 * Use: node version.js MY_THEME_ASSET_VERSION
 * Most of the time, this would be useful in npm run build
 * You may need to use the npm module 'concurrently'
 */
const fs = require('fs');

// Get the constant name that we are replacing from arguments
const constantName = process.argv[2];

fs.readFile('./functions.php', 'utf8', (err, data) => {
	if (err) {
		throw new Error(`Something went wrong with the versioning script! ${ err }`);
	}

	const regExp = new RegExp(`define\\(\\s?\\'${ constantName }\\'.*?\\n`);
	const match = data.match(regExp);
	const newConstant = `define( '${ constantName }', '${ Date.now() }' );\n`;
	const newFile = data.replace(match, newConstant);

	fs.writeFile('./functions.php', newFile, 'utf8', (err) => {
		if (err) {
			throw err;
		}
	});

});
