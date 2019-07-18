<?php // functions/utilities //


// let's have that slug then Daniel
function cook_slug($str) {
  $str = strtolower(trim($str));
  $str = preg_replace('/[^a-z0-9-]/', '-', $str);
  $str = preg_replace('/-+/', "-", $str);
  rtrim($str, '-');
  return $str;
}

// strip everything out of number (for phone)
function nu($i) {
    return preg_replace("/[^0-9]/", "", $i);
}