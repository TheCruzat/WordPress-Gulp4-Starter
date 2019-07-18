s<?php

// copyright symbol [cr]
function copy_r() 	{ 	return '&copy;';    }
add_shortcode('cr','copy_r');

// current year [yr]
function year_r() 	{ 	return date('Y');   }
add_shortcode('yr','year_r');

// site url [url]
function url_r() 	{	return URL; }
add_shortcode('url','url_r');

?>