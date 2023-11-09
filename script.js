'use strict';

// guess number:
let secretNumber = Math.trunc(Math.random()*20+1);
console.log(secretNumber);
let score =20;
let highScore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
//  document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
   // console.log('Your input: '+guess+' type of input: '+ typeof guess);
   if(!guess){
    displayMessage('⛔️ No Number!');
   }
   // When Player Guess right number:
   else if(guess === secretNumber){
    displayMessage('🎉Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    //dom manupulation css :
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '20rem';
    if(score > highScore){
        highScore = score;
      document.querySelector('.highscore').textContent = highScore;  
    }
   }
   else if(guess!== secretNumber){
    if(score > 1){
        document.querySelector('.message').textContent =guess>secretNumber? '📈Too high!': '📉 Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        displayMessage('💥you lost the game!');
        document.querySelector('.score').textContent = 0;
    }
   }
});

// for Again button;
document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20+1);
    document.querySelector('.message').textContent = '😀 Start guessing..';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#0c0f0b';
    document.querySelector('.number').style.width = '15rem';
  
});



