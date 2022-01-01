'use strict';

let secretNumb = Math.floor(Math.random() * 25 + 1);
let score = 25;
let highScore = 0;

function checkButton() {
  const guess = Number(document.querySelector('.input').value);
  if (!guess) {
    document.querySelector('.guess').textContent = 'NOT A NUMBER 🚫';
  } else if (guess === secretNumb) {
    document.querySelector('.guess').textContent = 'YOU WIN 🎉';
    document.querySelector('.highsScoreNumber').textContent = score;
    document.querySelector('.secretNumber').textContent = secretNumb;
    document.querySelector('body').classList.add('win');
    document.querySelector('.check').classList.add('win');
    document.querySelector('.again').classList.add('win');
    document.querySelector('.input').classList.add('win');
    document.querySelector('.secretNumber').classList.add('win');
    if (score > highScore) {
      highScore = score;
    }
  } else if (guess < secretNumb) {
    if (score > 0) {
      document.querySelector('.guess').textContent = 'TOO LOW 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').textContent = 'YOU LOST';
      document.querySelector('body').style.fontSize = '5rem';
      document.querySelector('body').classList.add('lose');
    }
  } else if (guess > secretNumb) {
    if (score > 0) {
      document.querySelector('.guess').textContent = 'TOO HIGH 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('body').textContent = 'YOU LOST';
      document.querySelector('body').style.fontSize = '4rem';

      document.querySelector('body').classList.add('lose');
    }
  }
}

function playAgainButton() {
  score = 25;
  secretNumb = Math.floor(Math.random() * 25 + 1);

  document.querySelector('.guess').textContent = 'Start guessing again...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').classList.remove('win');
  document.querySelector('.check').classList.remove('win');
  document.querySelector('.again').classList.remove('win');
  document.querySelector('.input').classList.remove('win');
  document.querySelector('.secretNumber').classList.remove('win');

  document.querySelector('.secretNumber').textContent = '❔';
  document.querySelector('.input').value = '';
}

document.querySelector('.check').addEventListener('click', checkButton);

document.querySelector('.again').addEventListener('click', playAgainButton);
