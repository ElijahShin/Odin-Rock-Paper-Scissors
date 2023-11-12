const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

let playerScore = 0;
let computerScore = 0;


/* 
Get one of three choices for the computer. 
@return String
*/

function getComputerChoice() {
  //Random number generator chooses a number between 1-3
  let rand = Math.floor(Math.random() * 3) + 1;
  //1 = Rock 2 = Paper 3 = Scissors
  //Run through a Switch statement that returns rock, paper scissor 
  switch (rand) {
    case 1:
      return ROCK;
      break;
    case 2:
      return PAPER;
      break;
    case 3:
      return SCISSORS;
      break;
  }
}

/*
Get player choice from player input.
@return Number
*/
function playerSelection() {
  //Prompt the user to type in a choice.
  let input = prompt('Type in your choice of Rock, Paper, Scissors');
  //Take string input and change it to lower case letters.
  let capitalizeInput = input.toUpperCase();

  //Take in value in a switch statement which returns rock, paper, or scissors.
  switch (capitalizeInput) {
    case ROCK:
      console.log(capitalizeInput)
      return capitalizeInput;
      break;

    case PAPER:
      console.log(capitalizeInput)
      return capitalizeInput;
      break;

    case SCISSORS:
      console.log(capitalizeInput)
      return capitalizeInput;
      break;

    default:
      break;
  }
}

/*
Play a single round of the game.
@return String
*/
function playRound(playerSelection, computerSelection) {
  //Tie Scenarios
  if (playerSelection === ROCK && computerSelection === ROCK) {
    return -1;

  } else if (playerSelection === PAPER && computerSelection === PAPER) {
    return -1;
    
  } else if (playerSelection === SCISSORS && computerSelection === SCISSORS) {
    return -1;

  //Player Win Scenarios
  } else if (playerSelection === ROCK && computerSelection === SCISSORS) {
    return 1;

  } else if (playerSelection === PAPER && computerSelection === ROCK) {
    return 1;

  } else if (playerSelection === SCISSORS && computerSelection === PAPER) {
    return 1;
  }

  //Computer Win Scenarios
  else if (computerSelection === ROCK && playerSelection === SCISSORS) {
    return 0;

  } else if (computerSelection === PAPER && playerSelection === ROCK) {
    return 0;

  } else if (computerSelection === SCISSORS && playerSelection === PAPER) {
    return 0;
  }
}

/*
Displays the results of oe round of the game.
@param winStatusNum represents numbers 1 - win, 0 - lose, -1 - tie status as Number.
@param playerSelection as String 
@param computerSelection as String 
*/
function roundResult(winStatusNum, playerSelection, computerSelection) {

  //if player wins, print win message
  if(winStatusNum === 1) {
    return `You win this round! Your ${playerSelection} beats ${computerSelection}!`; 

    //if player loses, print lose message
  } else if (winStatusNum === 0) {
    return `You lose this round! ${computerSelection} beats your ${playerSelection}!`;

    //else player ties, print tie message
  } else {
    return `You tied this round! No points awarded!`;
  }
}

/*
Keeps player and computer score.
@param winStatusNum represents numbers 1 - win, 0 - lose, -1 - tie status as Number.
*/
function scoreCount(winStatusNum) {

  if (winStatusNum === 1) {
    playerScore++;
  } else if (winStatusNum === 0) {
    computerScore++;
  } 
}

function gameWinner() {
  //Checks to see which player has the most at the end of 5 rounds to determine the official winner.
  if(playerScore > computerScore) {
    return 'Congratulations! You won the ROCK PAPER SCISSORS GAME!'
  } else if(playerScore < computerScore) {
    return 'Game Over! You lost the ROCK PAPER SCISSORS GAME!';
  } else {
    return 'Wow! You tied the ROCK PAPER SCISSORS GAME!'
  }
}

/* 
Plays 5 rounds of Rock Paper Scissors.
*/
function game() {

  for(let i = 0; i < 5; i++) {
    let computer = getComputerChoice();
    let player = playerSelection();
    
    let winStatus = playRound(player, computer);
    scoreCount(winStatus);
    console.log(roundResult(winStatus, player, computer));
  }
  console.log(gameWinner());
}

game();
