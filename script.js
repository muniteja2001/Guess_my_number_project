let audio = new Audio('game-bonus-144751.mp3');
let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
    document.getElementById('message').textContent = message;
};

document.getElementById('check').addEventListener('click', function () {
    const guess = Number(document.getElementById('guess').value);

    // Check if guess is within range
    if (guess < 1 || guess > 20) {
        displayMessage('Please enter a number between 1 and 20!');
    } else if (!guess) {
        displayMessage('No number entered!');
    } else if (guess === secret) {
        displayMessage('Correct Number!');
        document.getElementById('number').textContent = secret;
        document.getElementById('number').classList.add('correct');
        document.body.style.backgroundColor = '#4caf50';
        audio.play();

        if (score > highscore) {
            highscore = score;
            document.getElementById('highscore').textContent = highscore;
        }
    } else {
        if (score > 1) {
            displayMessage(guess > secret ? 'Too high!' : 'Too low!');
            score--;
            document.getElementById('score').textContent = score;
            document.getElementById('number').classList.add('shake');
            setTimeout(() => document.getElementById('number').classList.remove('shake'), 500);
        } else {
            displayMessage('You lost the game!');
            document.getElementById('score').textContent = 0;
        }
    }
});

document.getElementById('again').addEventListener('click', function () {
    score = 20;
    secret = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    document.getElementById('score').textContent = score;
    document.getElementById('number').textContent = '?';
    document.getElementById('number').classList.remove('correct');
    document.getElementById('guess').value = '';
    document.body.style.backgroundColor = '#1d1e22';
    document.getElementById('again').classList.add('flash');
    setTimeout(() => document.getElementById('again').classList.remove('flash'), 500);
});