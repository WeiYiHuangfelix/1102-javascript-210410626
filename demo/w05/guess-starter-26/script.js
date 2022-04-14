'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1; //Math.random亂數 Math.floor函式會回傳小於等於所給數字的最大整數
console.log('secrtNumber', secretNumber);

let score = 20;
let highscore = 0;

const checkBtn = document.querySelector('.check'); //抓取check這個資料

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;//抓到message資料填進去.textContent 測試後字串跟數字無法相等 所以要在guess增加Number轉換數字
}


checkBtn.addEventListener('click', () => {  //監聽滑鼠點一下click事件
  const guess = Number(document.querySelector('.guess').value);//要撈到值要寫.value
  console.log('guess', guess);

  if (!guess) { //如果是空值 就會顯示No number!
    displayMessage('No number!');
  }
  else if (guess === secretNumber) { //如果數字是相等
    displayMessage('correct Number!');//顯示訊息 訊息要送到message 參數
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (guess > highscore) {
      highscore = score ;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  else if (guess !== secretNumber) {//不等於 次數會減少
    if (score > 1) {//次數大於1
      displayMessage(guess > secretNumber ? 'Guess too high' : 'Guess too low');
      score--;//次數減1
      document.querySelector('.score').textContent = score;
    }
    else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor ='red';
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.guess').value = "";
  document.querySelector('.message').textContent = "Start guessing...";
  document.querySelector('body').style.backgroundColor = "#222";
  document.querySelector('.score').textContent = 20;
  document.querySelector('.highscore').textContent = 20 - 1;
});