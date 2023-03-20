'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber);

  //No input
  if (!guessingNumber) {
    //document.querySelector('.guess-message').textContent = 'Введите число!';
    displayGuessMessage('Введите число!');
  }
  //Player won
  else if (guessingNumber === secretNumber) {
    displayGuessMessage('Правильно!');
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';
    document.querySelector('.question').style.width = '50rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //number from input is wrong
  else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      displayGuessMessage(
        guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayGuessMessage('Game over!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

/*Number is bigger than secret number
  else if (guessingNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Слишком много!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Game over!';
      document.querySelector('.score').textContent = 0;
    }
  }
  Number is smaller than secret number
  else if (guessingNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Слишком мало!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'Game over!';
      document.querySelector('.score').textContent = 0;
    }
  }
});*/

//обновление страницы
document.querySelector('.again').addEventListener('click', function () {
  //location.reload();
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  displayGuessMessage('Начни угадывать!');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number-input').value = '';
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
});
