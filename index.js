// 固定表示対象の要素
const fixedElement = document.querySelector('.container');

// スクロール量を格納する変数
let scrollPosition = 0;

window.addEventListener('scroll', function() {
  // 現在のスクロール位置を取得
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // 固定表示対象の要素が存在する場合のみ処理を行う
  if (fixedElement) {
    // 一定のスクロール量を超えたら固定表示
    if (scrollPosition > 100) {
      fixedElement.style.position = 'sticky';
      fixedElement.style.top = '0';
    } else {
      fixedElement.style.position = 'static';
    }
  }

  // スクロール量を出力
  console.log(scrollPosition);
});