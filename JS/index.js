
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
Get player choice through user input
@Return Number
*/
function playerSelection() {
  //Prompt to choose between 3 three choices, bound to keys 1-3
  let input = prompt('1 - Rock\n2 - Paper\n3 - Scissors');

  //Take in value in a switch statement which returns rock, paper, or scissors
  switch (+input) {
    case 1:
      console.log("Rock");
      return "Rock";
      break;
    case 2:
      console.log("Paper");
      return "Paper";
      break;
    case 3:
      console.log("Scissors");
      return "Scissors";
      break;

    default:
      break;
  }
}

playerSelection();


