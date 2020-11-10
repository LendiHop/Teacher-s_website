<?php

$recepient = "youmail@ya.ru";
$sitename = "mishina.ml";

$name = trim($_GET["name"]);
$text = trim($_GET["text"]);

$pagetitle = "Новая форма с сайта \"$sitename\"";
$message = "Имя: $name \nТекст: $text";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");