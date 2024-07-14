// id：btnを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
// id:textを持つHTML要素を取得し、定数に代入する
const changeText = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する(2秒後)
setTimeout(() => {
  changeText.textContent = "ボタンをクリックしました";
  }, 2000);
  