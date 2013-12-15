/*
 * Created by sota1235
 * Date 2013/12/15
 * reverse polish nation Program
 */

var stac[] = document.getElementById("num").split(" ");
var i = 0;

// エラー処理
if(stac[0] = /* 数字か否か */) {
  alert("最初に２つの数字を入力してください");
} else if(stac[1] = /* 数字か否か */){
  alert("少なくとも２つの数字を入力してください");
}

while(/* 文字列を全て洗い出し */){
  if(stac[i]==/* 数字、記号以外に何か混ざってるか否か */){
    alert("無効な文字列が含まれています");
  }
  if(stac[i]==/* 数字か否か */){
    i++;
    if(i==stac.length){
      alert("記号を入れてください ('+','-','*','/')");
    }
  }
}
