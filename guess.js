const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const result = document.querySelector(".result");
const count = document.querySelector(".count");

let randomNumber = Math.random();
console.log("觀察隨機的數字：", randomNumber);
console.log("加減乘除：",1.5+1.5, 2*2 , 3/3 , 4*4 , 0.11*100  );
console.log("Math.floor：", Math.floor( 3.99999));
let answer = Math.random();
console.log("隨機數字是否會介於0~100：", randomNumber);

let countNum =0;   //廣域變數
function checkGuess() {
    countNum++;
    count.textContent = "猜測次數："+countNum;
    //guessField.focus();       //游標焦點預設在輸入欄位裡
    const userGuess = Number(guessField.value);  //取得欄位值，並轉為數字
if  (  answer === userGuess ) {
    result.textContent = "猜測結果：Congratulations!" ;
}
else if (answer < userGuess ) {
    result.textContent = "猜測結果：數字太小!" ;
}
else if (answer  >  userGuess ) {
    result.textContent = "猜測結果：數字太大!";
}
}
guessSubmit.addEventListener("click", checkGuess);   //當按鈕被點擊，執行函式
