/*
 * Created by sota1235
 * Date 2013/12/15
 * reverse polish nation Program
 */

function calc(form){
    var stac = new Array();
    stac = form.num.value.toString().split(' ');
    var i = 0;
    var sum = 0; // Answer  

  // エラー処理
  if(stac[0].match(/[^0-9]/g)) {
    alert("最初に２つの数字を入力してください");
    return;
  } else if(stac[1].match(/[^0-9]/g)) {
    alert("少なくとも２つの数字を入力してください");
    return;
  } 

  while(stac.length > 0){
    if(stac[i].match(/[^0-9\+\-\*\/]/g)){
      alert("無効な文字列が含まれています");
      return;
    } 

    if(stac[i].match(/[0-9]/g)){
      i++;
      // 最後の文字が数字ならエラー
      if(i==stac.length){
        alert("記号を入れてください ('+','-','*','/')");
        return;
      }
    } else {
      // 記号の時の処理
      switch(stac[i]){
        case "+" :
          sum = stac[i-1] + stac[i-2];
          break;
        case "-" :
          sum = stac[i-1] - stac[i-2];
          break;
        case "*" :
          sum = stac[i-1] * stac[i-2];
          break;
        case "/" :
          sum = stac[i-1] / stac[i-2];
          break;
      }
      for(var j=0;j<3;j++){
        stac.pop();
      }
    }
  }
  document.getElementById("answer").innerHTML = "<p>Answer : " + sum + "</p>";
}
