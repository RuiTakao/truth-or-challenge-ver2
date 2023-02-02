<?php
if ($_SERVER["REQUEST_URI"] !== str_replace('index.php', '', $_SERVER["SCRIPT_NAME"])) {
  $path = explode("/", $_SERVER["PATH_INFO"]);
  switch ($path[1]) {
    case 'dist':
      include 'dist/truth-or-dare.php';
      return;
    default:
      include 'dist/truth-or-dare.php';
  }
} else {
  require_once('dist/truth-or-dare.php');
}

