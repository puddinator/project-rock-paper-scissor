
let playerScore = 0, 
computerScore = 0;

let computerPlay = function() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
    }
}


function playOneRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie! Both of you picked " + playerSelection;
    } else if ((playerSelection === "rock" && computerSelection === "scissor") || 
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissor" && computerSelection === "paper")) {
        playerScore++;
        return `You won! ${playerSelection} beats ${computerSelection}!`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }

}


const buttons = document.querySelectorAll('button');
const div = document.querySelector('div');
const yourScoreHTML = document.querySelector('.yourScore');
const computerScoreHTML = document.querySelector('.computerScore');

console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('click');
        let message = playOneRound(button.getAttribute('id'), computerPlay());
        div.textContent = message;
        yourScoreHTML.textContent = playerScore;
        computerScoreHTML.textContent = computerScore;
        if (playerScore > 4) div.textContent = 'You won! First to reach 5 points.';
        if (computerScore > 4) div.textContent = 'Computer won! First to reach 5 points.';
    });
});

