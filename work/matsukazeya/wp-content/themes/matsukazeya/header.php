<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>株式会社松風屋｜創業約100年　山形の菓子処松風屋｜公式サイト</title>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.10.0/css/all.css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/stylesheet.css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/responsive.css">
  <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/img/favicon.ico">
  <?php
  wp_enqueue_script('jquery');
  wp_enqueue_script('matsukazeya-js', get_template_directory_uri().'/js/index.js');
  wp_head();
  ?>
</head>
<body>
  <div class="loader">
    <p>読み込み中・・・</p>
  </div>
  <div class="modal">
    <p class="modal-close">メニューを閉じる</p>
    <nav>
      <ul>
        <li><a href="#">トップページ</a></li>
        <li><a href="#">松風屋のこだわり</a></li>
        <li><a href="#">あんどーなつ</a></li>
        <li><a href="#">商品のご紹介</a></li>
        <li><a href="#">店舗情報</a></li>
        <li><a href="#">会社概要</a></li>
        <li><a href="#">ご注文・お問い合わせ</a></li>
      </ul>
    </nav>
  </div>
  <header>
    <p class="logo"><a href="#"><img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="松風屋"></a></p>
    <nav>
      <ul>
        <li><a href="#">トップページ</a></li>
        <li><a href="#">松風屋のこだわり</a></li>
        <li><a href="#">あんどーなつ</a></li>
        <li><a href="#">商品のご紹介</a></li>
        <li><a href="#">店舗情報</a></li>
        <li><a href="#">会社概要</a></li>
        <li class="nav-contact"><a href="#">ご注文・お問い合わせ</a></li>
      </ul>
    </nav>
    <p class="modal-open"><img src="<?php echo get_template_directory_uri(); ?>/img/menu.png" alt=""></p>
  </header>
  <div class="top">
    <h1><img src="<?php echo get_template_directory_uri(); ?>/img/logo_2.png" alt="MATSUKAZEYA"></h1>
  </div>