function FixedAnime() {
    var headerH = $('header').outerHeight(true);
    var scroll = $(window).scrollTop();
    if (scroll >= headerH){//headerの高さ以上になったら
        $('header').addClass('fixed');//fixedというクラス名を付与
      }else{//それ以外は
        $('header').removeClass('fixed');//fixedというクラス名を除去
      }
  }
  
  
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
  });
  
  // ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
    FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
  });
  
$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });
});
let ie = 0;
let countimg = ["images/countentmenu/ピザクリッカーイメージ.png", "images/countentmenu/トランプイメージ.png", "images/countentmenu/putiputi.png", "images/countentmenu/typing.png"];
let fontchange = ["クリックゲーム", "トランプゲーム", "ぷちぷちゲーム", "タイピングゲーム"];
let gameurl = ["game.html"]
$('.borderLeft').click(function() {
    if(ie <= 0) {
        ie = countimg.length-1;
      }
      else {
           ie--;
      }
      $('.Imgup').attr('src', countimg[ie]);
      $('.gameurl').attr('src', gameurl[ie]);
      $("#mess").text(fontchange[ie]);
});
$('.borderRight').click(function() {
    if(ie == countimg.length-1) {
        ie = 0
      }
      else {
          ie++;
      }
      $('.Imgup').attr('src', countimg[ie]);
      $("#mess").text(fontchange[ie]);
});
$('.borderLeft').hover(function(){
    $(this).css("border-top", "3px solid skyblue");
    $(this).css("border-left", "3px solid skyblue");
    },
    function(){
    $(this).css("border-top", "3px solid rgb(34, 34, 30)");
    $(this).css("border-left", "3px solid rgb(34, 34, 30)");
    });
$('.borderRight').hover(function(){
    $(this).css("border-top", "3px solid skyblue");
    $(this).css("border-left", "3px solid skyblue");
    },
    function(){
    $(this).css("border-top", "3px solid rgb(34, 34, 30)");
    $(this).css("border-left", "3px solid rgb(34, 34, 30)");
    });

     /*アニメロード*/
     $(function() {
      setTimeout(function(){
        $('.start p').fadeIn(1600);
      },500); //0.5秒後にロゴをフェードイン!
      setTimeout(function(){
        $('.start').fadeOut(500);
      },2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
    });