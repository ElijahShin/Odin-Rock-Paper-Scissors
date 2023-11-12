const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';


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
    return `You tied! ${playerSelection} against ${computerSelection}`;

  } else if (playerSelection === PAPER && computerSelection === PAPER) {
    return `You tied! ${playerSelection} against ${computerSelection}`;
    
  } else if (playerSelection === SCISSORS && computerSelection === SCISSORS) {
    return `You tied! ${playerSelection} against ${computerSelection}`;

  //Player Win Scenarios
  } else if (playerSelection === ROCK && computerSelection === SCISSORS) {
    return `You win! ${playerSelection} crushes ${computerSelection}!`;

  } else if (playerSelection === PAPER && computerSelection === ROCK) {
    return `You win! ${playerSelection} devours ${computerSelection}`;

  } else if (playerSelection === SCISSORS && computerSelection === PAPER) {
    return `You win! ${playerSelection} slashes ${computerSelection}`;
  }

  //Computer Win Scenarios
  else if (computerSelection === ROCK && playerSelection === SCISSORS) {
    return `You lose! ${computerSelection} crushes ${playerSelection}!`;

  } else if (computerSelection === PAPER && playerSelection === ROCK) {
    return `You lose! ${computerSelection} devours ${playerSelection}`;

  } else if (computerSelection === SCISSORS && playerSelection === PAPER) {
    return `You lose! ${computerSelection} slices ${playerSelection}`;
  }
}

/* Plays Rock Paper Scissors */
function game() {

  for(let i = 0; i < 5; i++) {
    let computer = getComputerChoice();
    let player = playerSelection();
    
    console.log(playRound(player, computer));
  }
}

game();

