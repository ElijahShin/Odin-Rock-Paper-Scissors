//Rock Paper Scissors Program with Computer

/*

1. Computer chooses one of three choices.
2. Player chooses one of three choices.
3. If Rock vs Paper = Paper Wins!
   If Rock vs Scissors = Rock Wins!
   If Paper vs Scissors = Scissors Wins!

*/



//Corresponding choices by number for the game.
const ROCK_NUM = 1;
const PAPER_NUM = 2;
const SCISSORS_NUM = 3;

//String Rock Paper Scissor values.
const ROCK_STR = "rock";
const PAPER_STR = "paper";
const SCISSORS_STR = "scissors";

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

/* 
Plays a round of rock, paper, scissors
*/
function playRound(playerSelection, computerSelection) {
    if ( playerSelection.toLowerCase() === ROCK_STR && computerSelection === PAPER_STR ) {
        console.log("You lose! Paper beats Rock!");
        return 2;
    } 
    else if ( playerSelection.toLowerCase() === ROCK_STR && computerSelection === SCISSORS_STR ) {
        console.log("You win! Rock beats Scissors!");
        return 1;

    } else if ( playerSelection.toLowerCase() === PAPER_STR && computerSelection === ROCK_STR ) {
        console.log("You win! Paper beats Rock!");
        return 1;

    } else if ( playerSelection.toLowerCase() === PAPER_STR && computerSelection === SCISSORS_STR ) {
        console.log("You lose! Scissors beats Paper!");
        return 2;

    } else if ( playerSelection.toLowerCase() === SCISSORS_STR && computerSelection === ROCK_STR ) {
        console.log("You lose! Rock beats Scissors!");
        return 2;

    } else if ( playerSelection.toLowerCase() === SCISSORS_STR && computerSelection === PAPER_STR ) {
        console.log("You win! Scissors beats Paper!");
        return 1;

    } else {
        console.log("Wow! It's a tie-breaker! Get ready for another battle!");
        return 0;
    }
 
}

function keepScore(winner) {
/*    
    0,1,2 signifies tie, win, lose values for the player and computer.
    Value 0 is neither player nor computer.
    Value 1 is the player.
    Value 2 is the computer.

    if Value = 0, it's a tie. Nothing is incremented
    if Value = 1, Player wins and player score is incremented.
    if value = 2, Computer wins and computer score is incremented.
*/

    if (winner === 1) {
        playerScore++;
        console.log(`Player: ${playerScore} Computer: ${computerScore}`);
    } else if (winner === 2) {
        computerScore++;
        console.log(`Player: ${playerScore} Computer: ${computerScore}`);
    } else {
        
    }

}

function game() {
    /*
    Prompt user to enter their choice.
    Get computer choice selection.
    Play a round.
    
    */

    //Get user, computer choices.
   let userInput = prompt("Wanna choose Rock, Paper, or Scissors?", "Rock");
   let compChoice = getComputerChoice();

   let roundWinner = playRound(userInput, compChoice);
   
   keepScore(roundWinner);

}

