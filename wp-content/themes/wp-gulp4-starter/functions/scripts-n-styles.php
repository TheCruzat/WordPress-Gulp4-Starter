<?php

function load_style() {
	wp_enqueue_style('core', THEME.'/style.css', false);
}

function load_scripts() {
	wp_enqueue_script('plugins', THEME.'/js/plugins.js', false);
	wp_enqueue_script('scripts', THEME.'/js/scripts.js', false);
}

add_action( 'wp_enqueue_scripts', 'load_style' );
add_action( 'wp_enqueue_scripts', 'load_scripts' );