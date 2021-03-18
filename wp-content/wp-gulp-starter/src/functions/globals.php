<?php
// set up url based globals
define('URL',get_bloginfo('site_url'));
define('THEME',get_bloginfo('template_directory'));
define('IMG',THEME.'/img/');

// let's not edit theme in dashboard
define('DISALLOW_FILE_EDIT', true);

// custom upload folder, hide that WP DNA
define('UPLOADS', 'media' );

// you will probably want navigation
register_nav_menus( array(
	'primary' => 'Primary Menu',
) );

// and thumbnails
add_theme_support( 'post-thumbnails' );

// HTML5-friendly
add_theme_support( 'html5', array(
	'comment-list',
	'search-form',
	'comment-form',
	'gallery',
	'caption',
) );
