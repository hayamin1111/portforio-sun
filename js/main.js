'use strict';

// // ハンバーガーメニューの開閉とメニューの表示非表示
// //スクロールに合わせてアイコン等を表示する
// // トップへ戻る


//-------------------------------
//  アニメーション
//-------------------------------


//-------------------------------
//  ページ遷移
//-------------------------------
const anim = document.getElementById('anim'),
      home = document.getElementById('home'),
      works = document.getElementById('works'),
      prof = document.getElementById('prof'),
      contact = document.getElementById('contact'),
      worksBtn = document.getElementsByClassName('js-works_btn'),
      profBtn = document.getElementsByClassName('js-prof_btn'),
      contactBtn = document.getElementsByClassName('js-contact_btn');

const hide = (elem) =>  {
  elem.classList.add('is-fadeout');
  setTimeout(() => {
    elem.style.display = 'none';
  }, 500);
}

// ワークス以外のセクションをフェードアウト
for( var i=0 ; i < worksBtn.length; i++){
  worksBtn[i].addEventListener('click', function () {
    const elements = [anim, home, prof, contact]; 
    for( var i=0 ; i < elements.length; i++){
      hide(elements[i]);
  }
  
  //ワークスを表示
  works.style.display = 'block';
  anime({
    targets: works,
    easing: 'linear',
    opacity: 1,
    duration: 2000
  })
});
}

// プロフィール以外のセクションをフェードアウト
for( var i=0 ; i < profBtn.length; i++){
  profBtn[i].addEventListener('click', function () {
    const elements = [anim, home, works, contact]; 
    for( var i=0 ; i < elements.length; i++){
      hide(elements[i]);
  }
  //プロフィールを表示
    prof.style.display = 'block';
    anime({
      targets: prof,
      easing: 'linear',
      opacity: 1,
      duration: 2000
    })
  });
}

// コンタクト以外のセクションをフェードアウト
for( var i=0 ; i < contactBtn.length; i++){
  contactBtn[i].addEventListener('click', function () {
    const elements = [anim, home, works, prof]; 
    for( var i=0 ; i < elements.length; i++){
      hide(elements[i]);
  }
  //コンタクトを表示
    contact.style.display = 'block';
    anime({
      targets: contact,
      easing: 'linear',
      opacity: 1,
      duration: 2000
    })
  });
}

// // ハンバーガーメニューの開閉とメニューの表示非表示
// $(function () {
//   const $menu = $('#menu'),
//         $line1 =$('#menu span:nth-child(1)'),
//         $line2 =$('#menu span:nth-child(2)'),
//         $line3 =$('#menu span:nth-child(3)'),
//         $gnav = $('#gnav');

//   $menu.on('click', function () {
//     $menu.toggleClass('active');
//     if ($menu.hasClass('active')) {
//       $line1.removeClass('moveLine1-cls');
//       $line1.addClass('moveLine1-opn');
//       $line2.addClass('moveLine2');
//       $line3.removeClass('moveLine3-cls');
//       $line3.addClass('moveLine3-opn');
//       $gnav.fadeIn(500);
//     } else {
//       $line1.removeClass('moveLine1-opn');
//       $line1.addClass('moveLine1-cls');
//       $line2.removeClass('moveLine2');
//       $line3.removeClass('moveLine3-opn');
//       $line3.addClass('moveLine3-cls');
//       $gnav.fadeOut(500);
//     }
//   });
// });
  

// //スクロールに合わせてアイコン等を表示する
// $(function () {
//   let $window = $(window),
//       $icon =$('.sec_icon'),
//       $secTtl = $('.about .conts_ttl, .works .conts_ttl, .profile .conts_ttl, .contact .conts_ttl'),
//       $desc = $('.conts_ttl_sub, .about_desc, .profile_desc, .contact_desc');


//   $window.on('scroll', function () {
//     let scroll = $window.scrollTop(),     
//         winHeight = $window.height();

//     //各セクションのアイコンの表示
//     $icon.each(function () {
//       let pos =  $(this).offset().top;
//           // scroll = $window.scrollTop();
//       if ( scroll > pos - winHeight) {
//         $(this).addClass('show-icon');
//       }
//     });

//     //各セクションのタイトルの表示
//     // let winHeight = $window.height();
//         // scroll = $window.scrollTop();
//     $secTtl.each(function () {
//       let pos =  $(this).offset().top;
//       if ( scroll > pos - winHeight) {
//         $(this).addClass('show-conts_ttl');
//       }
//     });

//     //各テキストの表示
//     $desc.each(function () {
//       let pos =  $(this).offset().top;
//       if ( scroll > pos - winHeight) {
//         $(this).addClass('show-desc');
//       }
//     });

//     //スクリーンショットの表示
//     $('.work').each(function () {
//       let pos =  $(this).offset().top;
//       if ( scroll > pos - winHeight + 100) {
//         $(this).addClass('show-work');
//       }
//       // $window.trigger('scroll');
//     });

//     //トップへ戻るボタンの表示
//     $('.page-top').each(function () {
//       let pos =  $(this).offset().top;
//       if ( scroll > pos - winHeight + 50) {
//         $(this).addClass('show-page-top');
//       }
//     });
//     // $window.trigger('scroll');
//   });
// });


// // トップへ戻る
// $(function () {
//   $('.page-top').click(function (){
//     $('html, body').stop().animate({scrollTop: 0}, 500, 'swing');
//   });
// });



// //-------------------------------
// //       制作物の紹介ページ
// //-------------------------------
