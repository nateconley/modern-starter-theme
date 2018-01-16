<?php

define( 'STARTER_THEME_ASSETS_VERSION', '1516066630836' );
define( 'STARTER_THEME_SLUG', 'starter-theme' );
define( 'STARTER_THEME_DIST_URL', trailingslashit( get_template_directory_uri() . '/dist' ) );

class Starter_Theme_Functions_Class {

	function __construct() {}

	public static function init() {

		self::hooks();

	}

	public static function hooks() {

		add_action( 'wp_enqueue_scripts', array( __CLASS__, 'scripts' ) );
		add_filter( 'script_loader_tag', array( __CLASS__, 'defer_attribute' ), 10, 2 );

	}

	/**
	 * Enqueue styles and scripts
	 */
	public static function scripts() {

		// This is the script critical to load
		wp_enqueue_script(
			STARTER_THEME_SLUG . '-load',
			STARTER_THEME_DIST_URL . 'load.js',
			array(),
			STARTER_THEME_ASSETS_VERSION,
			true
		);

		// Scripts to be loaded defer
		wp_enqueue_script(
			STARTER_THEME_SLUG . '-defer',
			STARTER_THEME_DIST_URL . 'defer.js',
			array(),
			STARTER_THEME_ASSETS_VERSION,
			true
		);

		// Enqueue the styles
		wp_enqueue_style(
			STARTER_THEME_SLUG,
			STARTER_THEME_DIST_URL . 'styles.css',
			array(),
			STARTER_THEME_ASSETS_VERSION,
			'all'
		);

	}

	/**
	 * Add 'defer' attribute to defer.js
	 */
	public static function defer_attribute( $tag, $handle ) {

		if ( STARTER_THEME_SLUG . '-defer' !== $handle ) {
			return $tag;
		}

		return str_replace( 'src', ' defer=true src', $tag );

	}

}

Starter_Theme_Functions_Class::hooks();
