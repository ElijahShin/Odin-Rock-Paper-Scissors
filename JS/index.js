//Rock Paper Scissors Program with a User and Computer

//Corresponding choices by number for the game.
const ROCK_NUM = 1;
const PAPER_NUM = 2;
const SCISSORS_NUM = 3;

//String Rock Paper Scissor values.
const ROCK_STR = "rock";
const PAPER_STR = "paper";
const SCISSORS_STR = "scissors";

const SCORE_LIMIT = 5;

const SELECT_PARA1 = 'p:first-child';
const SELECT_PARA2 = 'p:nth-child(2)';

//Score
let playerScore = 0;
let computerScore = 0;

/*
Chooses rock, paper, scissors for the computer opponent.
*/
function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3 + 1);

    if (rand === ROCK_NUM) {
        console.log("Computer: Rock");
        return ROCK_STR;
    } else if (rand === PAPER_NUM) {
        console.log("Computer: Paper");
        return PAPER_STR;
    } else {
        console.log("Computer: Scissor");
        return SCISSORS_STR;
    }
}

function getPlayerChoice() {
    let buttons = document.querySelectorAll('button');

    buttons.forEach(button => button.addEventListener('click', event => {
        
        
        let playerChoice = event.target.textContent;
        let compChoice = getComputerChoice();
        
        let winner =  playRound(playerChoice, compChoice);
        let scoreMessage = keepScore(winner);
        displayText(scoreMessage, SELECT_PARA2);

        isGameOver();
    }));
}

function displayText(string, cssSelector) {
    let element = document.querySelector(`${cssSelector}`);
    element.textContent = string;
}

/* 
Plays a round of rock, paper, scissors
*/
function playRound(playerSelection, computerSelection) {
    

    if ( playerSelection.toLowerCase() === ROCK_STR && computerSelection === PAPER_STR ) {

        displayText("You lose this round! Paper beats Rock!", SELECT_PARA1);
    
        return 2;
    } 
    else if ( playerSelection.toLowerCase() === ROCK_STR && computerSelection === SCISSORS_STR ) {

        displayText("You win this round! Rock beats Scissors!", SELECT_PARA1);
    
        return 1;

    } else if ( playerSelection.toLowerCase() === PAPER_STR && computerSelection === ROCK_STR ) {

        displayText("You win this round! Paper beats Rock!", SELECT_PARA1);
    
        return 1;

    } else if ( playerSelection.toLowerCase() === PAPER_STR && computerSelection === SCISSORS_STR ) {

        displayText("You lose this round! Scissors beats Paper!", SELECT_PARA1);
    
        return 2;

    } else if ( playerSelection.toLowerCase() === SCISSORS_STR && computerSelection === ROCK_STR ) {

        displayText("You lose this round! Rock beats Scissors!", SELECT_PARA1);
    
        return 2;

    } else if ( playerSelection.toLowerCase() === SCISSORS_STR && computerSelection === PAPER_STR ) {

        displayText("You win this round! Scissors beats Paper!", SELECT_PARA1);
    
        return 1;

    } else {

        displayText("Wow! It's a tie-breaker this round! Get ready for another battle!", SELECT_PARA1);
        return 0;
    }
 
}

function keepScore(winner) {
/*    
    0,1,2 signifies tie, win, lose values respectively for the player or computer.
    Value 0 is neither player nor computer.
    Value 1 is the player.
    Value 2 is the computer.

    if Value = 0, it's a tie. Nothing is incremented
    if Value = 1, Player wins and player score is incremented.
    if value = 2, Computer wins and computer score is incremented.
*/

    if (winner === 1) {
       
        playerScore++;
        return `Player: ${playerScore} Computer: ${computerScore}`;
    } else if (winner === 2) {
        
        computerScore++;
        return `Player: ${playerScore} Computer: ${computerScore}`;
    } else {
        
        return `Player: ${playerScore} Computer: ${computerScore}`;
    }

}

function scoreReset() {
    playerScore = 0;
    computerScore = 0;
}

function isGameOver() {
    if (playerScore === SCORE_LIMIT) {
        
        displayText('CONGRATULATIONS! YOU WIN THE GAME!', SELECT_PARA2);
        scoreReset();

    } else if(computerScore === SCORE_LIMIT) {
        displayText('WOW! COMPUTER WINS THE GAME! YOU LOSE!', SELECT_PARA2);
        scoreReset();
    }
    
}

function game() {
    getPlayerChoice();

}

game();