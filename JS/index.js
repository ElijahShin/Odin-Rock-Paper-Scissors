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

    if(rand === ROCK_NUM) {
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

