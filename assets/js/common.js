// JavaScript Document

//ハンバーガー
$('.open-button').on('click',function(){
  $('.open-button').toggleClass('close');
  $('.nav-wrapper').toggleClass('slide-in');
  $('body').toggleClass('noscroll');
});
$('#nav a[href]').on('click',function(){
  $('.open-button').trigger('click');
    });

//pagetopボタン
$(function () {
    $("#page-top").hide();
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $("#page-top").fadeIn(500);
        } else {
            $("#page-top").fadeOut();
        }
    });
    $("#page-top").click(function () {
        $("body,html").animate({scrollTop: 0}, 500);
        return false;
    });
 
});

//page内リンク
$('#page-link a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top;  //idの上部の距離を取得
  $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});




// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

  // ふわっ
  $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
	$(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
}
    });



  // ふわっ

  $('.fadeInTrigger').each(function(){ //fadeInTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeIn');// 画面内に入ったらfadeInというクラス名を追記
    }else{
    $(this).removeClass('fadeIn');// 画面外に出たらfadeInというクラス名を外す
    }
    });
}

 $('.fadeLeftTrigger').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeLeft');
    }else{
    $(this).removeClass('fadeLeft');
    }
    });

  $('.fadeRightTrigger').each(function(){ 
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeRight');
    }else{
    $(this).removeClass('fadeRight');
    }
    });

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

//// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

//// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述


