/**
 * Import scripts that are critical to the functionality of the site
 */

/**
 * Import Styles
 * If you wanted to, you could delete normalize.css
 * Just remove the line, and enter "npm uninstall normalize.css"
 */
import 'normalize.css/normalize.css';
import './sass/styles.scss';

if (module.hot) {
	module.hot.accept();
}
