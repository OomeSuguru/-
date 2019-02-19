'use strict'
var sum = 0; // 合計値
var myInput = ""; // 現在入力している値
var myCalc = "+"; // 合計と入力値の演算子
var myFlg = 1; // １回前に入力したもの 0:数字 1:演算子

// 数値を取得するための関数
function myValue(myData) {
  myFlg = 0; //数値を代入してないと四則演算記号の分岐が利用できない
  myInput += myData; //現在の値に入力した値を演算
  document.myForm.myLine.value = myInput; //値を代入
}

// 四則演算のどの処理を行うか決めるハンドラ関数
function set(Data) {
  if (myFlg === 0) { // 0＝数値でないと計算の実行ができない
    myFlg = 1; // 演算モード
    var myWork = sum + myCalc + myInput; //合計値 １度目に入力された値
    sum = eval(myWork) // 計算式を計算させる
    myInput = ""; //２度目の入力の際に画面のクリア
    document.myForm.myLine.value = sum; //値を代入し表示
  }
  if (Data == "=") {
    sum = 0;
    myCalc = "+"
  } else {
    myCalc = Data
  };
};

// 入力した値をクリアする関数
function myC() {
  sum = 0;
  myCalc = "+"
  myInput = "";
  document.myForm.myLine.value = sum;
}