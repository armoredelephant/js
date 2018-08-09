var p1Button = document.querySelector('#p1');
var p2Button = document.getElementById('p2');
var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');
var paraDisplay = document.querySelector('#paraDisplay');
var resetButton = document.querySelector('#reset');
var numInput = document.querySelector('input');
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

numInput.focus();

p1Button.addEventListener('click', function() {
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            gameOver = true;
            p1Display.classList.add('green-text');
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener('click', function() {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            gameOver = true;
            p2Display.classList.add('green-text');
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener('click',function() {
    reset();
    numInput.focus();
    numInput.value = '';
    paraDisplay.textContent = 5;
    winningScore = 5;
});

numInput.addEventListener('change', function() {
    var results = Number(document.querySelector('input').value);
    paraDisplay.textContent = results;
    winningScore = results;
    reset();
});

function reset() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove('green-text');
    p2Display.classList.remove('green-text');
}