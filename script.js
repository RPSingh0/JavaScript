'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)

    // When there is no number
    if (!guess) {
        displayMessage('⛔No number!')
    }

    // When the player wins
    else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber
        displayMessage('🎉 Correct Number!')
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'

        if (score > highscore) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
    }

    // When the number is different
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈Too High' : '📉Too Low')
            score--
            document.querySelector('.score').textContent = score
        }
        else {
            displayMessage('💥You lost the game')
            document.querySelector('.score').textContent = 0
        }
    }
})

// For again button
document.querySelector('.again').addEventListener('click', function () {
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1
    displayMessage('Start guessing...')
    document.querySelector('.guess').value = ''
    document.querySelector('.score').textContent = score
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?'
})