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

  let rand = Math.floor(Math.random() * 3) + 1;

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
function playerSelection(value) {
  capitalizeInput = value.toUpperCase();

  switch (capitalizeInput) {
    case ROCK:
      return capitalizeInput;
      break;

    case PAPER:
      return capitalizeInput;
      break;

    case SCISSORS:
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
Displays the results of one round of the game.
@param winStatusNum represents numbers 1 - win, 0 - lose, -1 - tie status as Number.
@param playerSelection as String 
@param computerSelection as String 
*/
function roundResultStr(winStatusNum, playerSelection, computerSelection) {


  if(winStatusNum === 1) {
    return `You win this round! Your ${playerSelection} beats ${computerSelection}!`; 

  } else if (winStatusNum === 0) {
    return `You lose this round! ${computerSelection} beats your ${playerSelection}!`;

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

function scoreStr() {

  return `Player: ${playerScore}    Computer: ${computerScore}`;
}

/*
Displays messages on web page.
@param str as the message as String
@param ele as the specified html element as String
*/
function displayStr(str, tagClass) {
  const message = document.querySelector(`.${tagClass}`);
  message.textContent = str;

}

function gameWinner() {
  if(playerScore > computerScore) {
    return 'Congratulations! You won the ROCK PAPER SCISSORS GAME!'
  } else if(playerScore < computerScore) {
    return 'Game Over! You lost the ROCK PAPER SCISSORS GAME!';
  } else {
    return 'Wow! You tied the ROCK PAPER SCISSORS GAME!'
  }
}

function btnClick() {
    //Get reference dom rps button value
    const btnWrapper = document.querySelector('.btn-wrapper');

    //When the user clicks on a button, get the rps value of that button
    btnWrapper.addEventListener('click', event => {
      let btnValue = event.target.value;

      //Get player/computer choices
      let playerChoice = playerSelection(btnValue);
      let computerChoice = getComputerChoice();

      //Get the result of who won
      let winStatusVal = playRound(playerChoice, computerChoice);

      //Store win message
      let resultMsg = roundResultStr(winStatusVal, playerChoice, computerChoice);
      scoreCount(winStatusVal);

      //Store player, computer score message
      let scoreMsg = scoreStr();

      //Put up on webpage
      displayStr(resultMsg, "result");
      displayStr(scoreMsg, "score");
    });
}

btnClick();
