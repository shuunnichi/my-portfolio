// 固定表示対象の要素
const fixedElement = document.querySelector('.container');

// スクロール量を格納する変数
let scrollPosition = 0;

window.addEventListener('scroll', function() {
  // 現在のスクロール位置を取得(px)
  const currentScrollPosition = window.scrollY || window.pageYOffset;


  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  // ユーザーの画面の高さを取得
  const windowHeight = window.innerHeight;
  // console.log('Window Height:', windowHeight);
  // console.log('add:',windowHeight+scrollPosition); 
  console.log('d:',currentScrollPosition+windowHeight); 
  // 固定表示対象の要素が存在する場合のみ処理を行う
  if (fixedElement) {
    // // 一定のスクロール量を超えたら固定表示
    if (windowHeight > 11350) {
      fixedElement.style.position = 'sticky';
      fixedElement.style.top = '0';
    } else {
      fixedElement.style.position = 'static';
    }
  }

  // スクロール量を出力
  // console.log(currentScrollPosition);
});