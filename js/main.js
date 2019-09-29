'use strict';

//ヒーローイメージのアニメーション
//クリックでのページ遷移

//-------------------------------
//  アニメーション
//-------------------------------
anime({ //16個のボール
  targets: '.anim_1 div',
  delay: 300,
  backgroundColor: [
    { value: 'rgb(255, 231, 78)', 
      delay: function(el, i, l){return i * 50}},
    { value: '#5cafd6', 
      delay: function(el, i, l){return i * 10}}
  ],
  translateY: 
    { value: '8vw',
      delay: function(el, i, l){return i * 100} },
  borderRadius:
    { value: ['50%', 0], 
      duration: 600, delay: 2500},
  opacity: [ 
    {value: 1,},
    {value: 0 , delay: 2500}
  ]
});

anime({ //一つになるボール
  targets: '.anim_2 ',
  delay: 2400,
  easing: 'easeInOutExpo',
  borderRadius: {value: [0, '50%'], duration: 1700},
  opacity: 1,
  translateY: [
    {value: '-20vh', duration: 300, delay: 3700 }, 
    {value: '100vh', duration: 600 }, 
  ],
  scale: [
    {value: '.1', duration: 300, delay: 3700 }, 
    {value: '0', duration: 900 }, 
  ],
  complete: function() {

    anime({ //タイトル
      targets: '.anim_3 .wrap div',
      delay: function(el, i, l) { return i * 100},
      translateY: [
        {value: '-150vh', duration: 2000},
      ],
      scale: [
        {value: .5},
        {value: 1, }
      ]
    });
   }
});
    
anime({ //サブタイトル
  targets: '.sub__ttl',
  delay: 5800,
  translateY: [
    {value: '-150vh', duration: 2300},
  ],
  scale: [
    {value: .5},
    {value: 1, }
  ]
});

anime({ //サブタイトル
  targets: '.enter',
  delay: 6200,
  opacity: 1
});

//-------------------------------
//  ページ遷移
//-------------------------------
const anim = document.getElementById('anim'),
      home = document.getElementById('home'),
      works = document.getElementById('works'),
      prof = document.getElementById('prof'),
      contact = document.getElementById('contact'),
      enterBtn = document.getElementById('js-enter_btn'),
      homeBtn = document.getElementsByClassName('js-home_btn'),
      worksBtn = document.getElementsByClassName('js-works_btn'),
      profBtn = document.getElementsByClassName('js-prof_btn'),
      contactBtn = document.getElementsByClassName('js-contact_btn');

const hide = (elem) =>  {
  elem.classList.add('is-fadeout');
  setTimeout(() => {
    elem.style.display = 'none';
  }, 700);
}

// アニメーションが消えてホームセクションを表示
  enterBtn.addEventListener('click', function () {
    hide(anim);

  //ホームを表示
  home.style.display = 'block';
  anime({
    targets: home,
    easing: 'linear',
    opacity: 1,
    duration: 2000
  })
});

// // アクティブなセクションをフェードアウト
// for( var i=0 ; i < homeBtn.length; i++){
//   homeBtn[i].addEventListener('click', function () {
//     const elements = [works, prof, contact]; 
//     for( var i=0 ; i < elements.length; i++){
//       hide(elements[i]);
//   }
  
//   //ホームを表示
//     home.style.display = 'block';
//     anime({
//       targets: home,
//       easing: 'linear',
//       opacity: 1,
//       duration: 2000
//     })
//   });
// }

// // ワークス以外のセクションをフェードアウト
// for( var i=0 ; i < worksBtn.length; i++){
//   worksBtn[i].addEventListener('click', function () {
//     const elements = [anim, home, prof, contact]; 
//     for( var i=0 ; i < elements.length; i++){
//       hide(elements[i]);
//     }
  
//     //ワークスを表示
//     works.style.display = 'block';
//     anime({
//       targets: works,
//       easing: 'linear',
//       opacity: 1,
//       duration: 2000
//     })
//   });
// }

// // プロフィール以外のセクションをフェードアウト
// for( var i=0 ; i < profBtn.length; i++){
//   profBtn[i].addEventListener('click', function () {
//     const elements = [anim, home, works, contact]; 
//     for( var i=0 ; i < elements.length; i++){
//       hide(elements[i]);
//   }
//   //プロフィールを表示
//     prof.style.display = 'block';
//     anime({
//       targets: prof,
//       easing: 'linear',
//       opacity: 1,
//       duration: 2000
//     })
//   });
// }

// // コンタクト以外のセクションをフェードアウト
// for( var i=0 ; i < contactBtn.length; i++){
//   contactBtn[i].addEventListener('click', function () {
//     const elements = [anim, home, works, prof]; 
//     for( var i=0 ; i < elements.length; i++){
//       hide(elements[i]);
//     }
//   //コンタクトを表示
//     contact.style.display = 'block';
//     anime({
//       targets: contact,
//       easing: 'linear',
//       opacity: 1,
//       duration: 2000
//     })
//   });
// }
