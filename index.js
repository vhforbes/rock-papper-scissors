//Assining a random variable for the computer to play
            
function computerPlay() {
    let elm = ['rock', 'paper', 'scissors'];
    let rdm = Math.floor(Math.random() * 3);
    let pc_choice = elm[rdm];
    return pc_choice;
  }

//The game core

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {  

  if ((playerSelection == 'rock') && (computerSelection == 'paper')) {
      computerScore += 1
      return "You Lose! paper beats rock"
  }

  else if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
      playerScore += 1
      return "You Won! Rock beats Scissors"
  }
  else if ((playerSelection == 'rock') && (computerSelection == 'rock')) {
      
      return "It's a tie!"
  }
  else if ((playerSelection == 'paper') && (computerSelection == 'rock')) {
      playerScore += 1
      return "You Won! Paper beats Rock"
  }
  else if ((playerSelection == 'paper') && (computerSelection == 'scissors')) {
      computerScore += 1
      return "You Lose! Scissors beats Paper"
  }
  else if ((playerSelection == 'paper') && (computerSelection == 'paper')) {

      return "It's a tie!"
  }
  else if ((playerSelection == 'scissors') && (computerSelection == 'rock')) {
      computerScore += 1
      return "You Lose! Rock beats Scissors"
  }
  else if ((playerSelection == 'scissors') && (computerSelection == 'paper')) {
      playerScore += 1
      return "You Won! Scissors beats Paper"
  }
  else if ((playerSelection == 'scissors') && (computerSelection == 'scissors')) {
      return "It's a tie!"
  }
  }


let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissors')
let results = document.querySelector('#results')
let scoreBoard = document.querySelector('#scoreBoard')

rockButton.addEventListener('click', () => {
    results.textContent = (playRound('rock', computerPlay()))
    scoreBoard.textContent = 'Player: ' + playerScore + ' Computer: ' + computerScore;
    gameOver()
});
paperButton.addEventListener('click', () => {
    results.textContent = (playRound('paper', computerPlay()))
    scoreBoard.textContent = 'Player: ' + playerScore + ' Computer: ' + computerScore;
    gameOver()
});
scissorsButton.addEventListener('click', () => {
    results.textContent = (playRound('scissors', computerPlay()))
    scoreBoard.textContent = 'Player: ' + playerScore + ' Computer: ' + computerScore;
    gameOver()
});

function gameOver() {
    if (playerScore > 3) {
        results.textContent = 'You Won!'
        scoreBoard.textContent = 'GAME OVER'
    }
    if (computerScore > 3) {
        results.textContent = 'You Lost!'
        scoreBoard.textContent = 'GAME OVER'
    }
}





/*  
//Get an input from player, mix it with the computer play value and the game core 

  function game() {

  for (let i = 0; i < 5; i++) {  

      let playerSelection = prompt("Choose your weapon: ");
      playerSelection = playerSelection.toLowerCase();

      while (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
          alert('It must be Rock, Paper or Scissors');
          playerSelection = prompt("Choose your weapon: ");
          playerSelection = playerSelection.toLowerCase();
      }

      let computerSelection = computerPlay();
 
      let result = playRound(playerSelection, computerSelection);

      console.log(result);               
  }
  }
  */
 