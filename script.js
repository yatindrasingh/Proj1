'use strict';

const snumber = Math.trunc(Math.random() * 21);
let score = 20;
let Highscore = 0;

document.querySelector('.number').textContent = snumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🤞 No Number';
  } else if (guess === snumber) {
    document.querySelector('.body').style.backgroundColor = '#60b347';

    document.querySelector('.message').textContent =
      '🙌 Correct Answer Congrats';

    Highscore++;
    document.querySelector('.highscore').textContent = Highscore;

    score++;
    document.querySelector('.score').textContent = score++;
  } else if (guess > snumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Your guessed number is too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score === 0) {
      document.querySelector('.message').textContent = 'You lost the game';
    }
  } else if (guess < snumber) {
    document.querySelector('.message').textContent =
      'Your guessed number is too low';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
