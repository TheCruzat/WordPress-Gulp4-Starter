<!doctype html>
<html class="no-js" lang="">
<head>
  <title>WordPress Gulp 4 Starter by Dan Cruzat</title>
  <link rel="icon"
      type="image/svg+xml"
      href="<?php echo IMG; ?>favi.svg?v=1.1">
  <link rel="alternate icon"
      href="<?php echo IMG; ?>favi.ico?v=1.1">
  <?php wp_head(); ?>
</head>
<body>
<?php
if ( have_posts() ) {
    while ( have_posts() ) {
        the_post();
        the_title( '<h3>', '</h3>' );
        the_content();
    }
}
wp_footer();
?>
</body>
</html>
