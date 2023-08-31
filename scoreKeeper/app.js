const p1 = {
    score: 0,
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2button'),
    display: document.querySelector('#p2display')

}

const resetButton = document.querySelector('#resetButton');
const selectWinScore = document.querySelector('#playto');

let winScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if(!isGameOver) {
        player.score += 1;
        if (player.score === winScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

selectWinScore.addEventListener('change', function() {
    winScore = parseInt(this.value);
    reset();

})

p1.button.addEventListener('click', function () {
    updateScores(p1,p2);
})

p2.button.addEventListener('click', function () {
    updateScores(p2,p1);
})

resetButton.addEventListener('click', reset);
    
function reset() {    
    isGameOver = false;
    for (let p of [p1,p2]) {
        p.score = 0;
        p.display.innerHTML = 0;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.button.disabled = false;
    }
}
