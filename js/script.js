
// $(function() {
//   alert('OK!');
// });

// ハンバーガーメニュー
// $(".burger-btn").on("click", function () { //「burger-btn」をクリックすると
//   $(".burger-btn").toggleClass("close"); //closeというclassを追加/削除。
//   $(".globalNav").fadeToggle(500); //0.5秒かけてフェードイン/フェードアウト。
// });

'use strict';

// ハンバーガーメニュー

(function($) {
  var $nav   = $('.header');
  var $btn   = $('.burger__btn');
  var $mask  = $('#mask');
  var open   = 'open'; // class
  // menu open close
  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
      $nav.addClass( open );
    } else {
      $nav.removeClass( open );
    }
  });
  // mask close
  $mask.on('click', function() {
    $nav.removeClass( open );
  });
} )(jQuery);


// カーソル変更

$(function(){
  
  //カーソル要素の指定
  var cursor=$("#cursor");
  
  //mousemoveイベントでカーソル要素を移動させる
  $(document).on("mousemove",function(e){
    //カーソルの座標位置を取得
    var x=e.clientX;
    var y=e.clientY;
    //カーソル要素のcssを書き換える用
    cursor.css({
      "opacity":"1",
      "top":y+"px",
      "left":x+"px"
    });
  });
});


// TextRandomAnimeタイトルバラバラP312

function TextRandomAnimeControl(){
  $(".TextRandomAnime").each(function(){
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).heignt();
    if(scroll >= elemPos - windowHeight) {
      $(this).addClass("appearRandomtext");
    }else {
      $(this).removeClass("appearRandomtext")
    }
  });
}

$(window).scroll(function(){
  TextRandomAnimeControl();
});

$(window).on('load', function(){
  var element = $(".TextRandomAnimeControl");
  element.each(function(){
    var text = $(this).text();
    var textbox = '';
    text.split('').forEach(function(t){
      textbox += '<span>' + t + '</span>';
    });
    $(this).html(textbox);
  });
  TextRandomAnimeControl();
});