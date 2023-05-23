//Rock Paper Scissors Program with Computer

/*

1. Computer chooses one of three choices.
2. Player chooses one of three choices.
3. If Rock vs Paper = Paper Wins!
   If Rock vs Scissors = Rock Wins!
   If Paper vs Scissors = Scissors Wins!

*/



// Corresponding choices by number for the game.
const ROCK_NUM = 1;
const PAPER_NUM = 2;
const SCISSORS_NUM = 3;

const ROCK_STR = "rock";
const PAPER_STR = "paper";
const SCISSORS_STR = "scissors";

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3 + 1);

    if (rand === ROCK_NUM) {
        console.log("Rock");
        return ROCK_STR;
    } else if (rand === PAPER_NUM) {
        console.log("Paper");
        return PAPER_STR;
    } else {
        console.log("Scissor");
        return SCISSORS_STR;
    }
}

/* 

*/
function playRound(playerSelection, computerSelection) {
    if ( playerSelection.toLowerCase() === ROCK_STR && computerSelection === PAPER_STR ) {
        console.log("You lose! Paper beats Rock!");
        return "You lose! Paper beats Rock!";
    } 
    else if ( playerSelection.toLowerCase() === ROCK_STR && computerSelection === SCISSORS_STR ) {
        console.log("You win! Rock beats Scissors!");
        return "You win! Rock beats Scissors!";
    } else if ( playerSelection.toLowerCase() === PAPER_STR && computerSelection === ROCK_STR ) {
        console.log("You win! Paper beats Rock!");
        return "You win! Paper beats Rocks!";
    } else if ( playerSelection.toLowerCase() === PAPER_STR && computerSelection === SCISSORS_STR ) {
        console.log("You lose! Scissors beats Paper!");
        return "You lose! Scissors beats Paper";
    } else if ( playerSelection.toLowerCase() === SCISSORS_STR && computerSelection === ROCK_STR ) {
        console.log("You lose! Rock beats Scissors!");
        return "You lose! Rock beats Scissors!";
    } else if ( playerSelection.toLowerCase() === SCISSORS_STR && computerSelection === PAPER_STR ) {
        console.log("You win! Scissors beats Paper!");
        return "You win! Scissors beats Paper!";
    } else {
        console.log("Wow! It's a tie-breaker! Get ready for another battle!");
        return "Wow! It's a tie-breaker! Get ready for another battle!";
    }
 
}


// playRound(ROCK_STR, ROCK_STR);