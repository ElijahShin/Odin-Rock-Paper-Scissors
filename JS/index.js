
/* 
Get one of three choices for the computer 
@Returns String
*/

function getComputerChoice() {
  //Random number generator chooses a number between 1-3
  let rand = Math.floor(Math.random() * 3) + 1;
  //1 = Rock 2 = Paper 3 = Scissors
  //Run through a Switch statement that returns rock, paper scissor 
  console.log(rand);
  switch (rand) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissors";
      break;
  }
}

/*
Get player choice from player input
@Return Number
*/
function playerSelection() {
  //Prompt the user to type in a choice
  let input = prompt('Type in your choice of Rock, Paper, Scissors');
  //Take string input and change it to lower case letters
  let lowerCaseInput = input.toLowerCase()

  //Take in value in a switch statement which returns rock, paper, or scissors
  switch (lowerCaseInput) {
    case 'rock':
      console.log(lowerCaseInput)
      return "Rock";
      break;

    case 'paper':
      console.log(lowerCaseInput)
      return "Paper";
      break;

    case 'scissors':
      console.log(lowerCaseInput)
      return "Scissors";
      break;

    default:
      break;
  }
}

playerSelection();


