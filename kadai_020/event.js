// id：btnを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('btn');
// id:textを持つHTML要素を取得し、定数に代入する
const changeText = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
// channgeTextの出力の変更
changeText.textContent = "ボタンをクリックしました";
});
