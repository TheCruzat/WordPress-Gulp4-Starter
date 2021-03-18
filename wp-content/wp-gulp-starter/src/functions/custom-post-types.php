<?php 

function codex_custom_init() {
    $args = array(
      'public' => true,
      'label'  => 'Records'
    );
    register_post_type( 'record', $args );
}
add_action( 'init', 'codex_custom_init' );