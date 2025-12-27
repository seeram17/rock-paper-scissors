let score = JSON.parse(localStorage.getItem('score'));

if (score === null) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}

updateScoreElement();

function generate() {
    const randomVal = Math.random();
    let computerMove = '';

    if (randomVal < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomVal < 2 / 3) {
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    }

    return computerMove;
}

function updateScoreElement() {
    document.querySelector('.score-text').innerHTML =
        `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function check(myMove, computerMove) {

    if (
        (myMove === 'Rock' && computerMove === 'Scissors') ||
        (myMove === 'Paper' && computerMove === 'Rock') ||
        (myMove === 'Scissors' && computerMove === 'Paper')
    ) {
        score.wins++;
        document.querySelector('.game-result').innerHTML = 'You Win';
    } else if (myMove === computerMove) {
        score.ties++;
        document.querySelector('.game-result').innerHTML = 'Game Ties';
    } else {
        score.losses++;
        document.querySelector('.game-result').innerHTML = 'You Lose';
    }

    document.querySelector('.game-moves').innerHTML = `You 
        <img class="move-icon" src="images/${myMove}.png">
        <img class="move-icon" src="images/${computerMove}.png">
        Computer`;

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();
}

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    localStorage.removeItem('score');
    updateScoreElement();

    document.querySelector('.game-result').innerHTML = '';
    document.querySelector('.game-moves').innerHTML = '';
}
