/**
 * node search-replace.js Theme Name
 */
const fs = require('fs');

// Create an array of words
const themeName = process.argv.slice(2);

// Array of files that contain text to be replaced
const fileNames = [
	'./functions.php',
	'./package.json',
	'./style.css',
];

// Starter Theme
const normal = themeName.map(capitalize).join(' ');

// STARTER_THEME
const loud = themeName.map(string => string.toUpperCase()).join('_');

// Starter_Theme
const pretty = themeName.map(capitalize).join('_');

// starter-theme
const slug = themeName.map(string => string.toLowerCase()).join('-');

function capitalize(string) {
	return string
		.toLowerCase()
		.replace(
			string.substr(0, 1), string.substr(0, 1).toUpperCase()
		);
}

// TODO: update user of progress

// Loop through files and replace
fileNames.forEach((fileName) => {

	fs.readFile(fileName, 'utf8', (err, data) => {
		if (err) {
			throw new Error(`Something went wrong with the versioning script! ${ err }`);
		}

		const newFile = data
			.replace(new RegExp('Starter Theme', 'g'), normal)
			.replace(new RegExp('STARTER_THEME', 'g'), loud)
			.replace(new RegExp('Starter_Theme', 'g'), pretty)
			.replace(new RegExp('modern-starter-theme', 'g'), slug);
			.replace(new RegExp('starter-theme', 'g'), slug);
	
		fs.writeFile(fileName, newFile, 'utf8', (err) => {
			if (err) {
				throw err;
			}
		});
	
	});

});
