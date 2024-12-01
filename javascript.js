function getComputerChoice() {
  const computerChoice = Math.random();

  if (computerChoice <= 0.33) {
    return 'rock';
  } else if (computerChoice > 0.33 || computerChoice < 0.66) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getHumanChoice() {
  const humanChoice = prompt('rock, paper or scissors').trim().toLowerCase();

  if (
    humanChoice === 'paper' ||
    humanChoice === 'scissors' ||
    humanChoice === 'rock'
  ) {
    return humanChoice;
  } else {
    alert('choose one of the three options');
  }
}

humanScore = 0;
computerScore = 0;

// function playRound(humanChoice, computerChoice) {}

function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);

  if (humanSelection === computerSelection) {
    console.log('tie');
  } else if (humanSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
    console.log('computer win');
  } else if (humanSelection === 'rock' && computerSelection === 'scissors') {
    humanScore++;
    console.log('human win');
  } else if (humanSelection === 'paper' && computerSelection === 'rock') {
    humanScore++;
    console.log('human win');
  } else if (humanSelection === 'rock' && computerSelection === 'scissors') {
    computerScore++;
    console.log('computer win');
  } else if (humanSelection === 'scissors' && computerSelection === 'paper') {
    humanScore++;
    console.log('human win');
  } else if (humanSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    console.log('computer win');
  }
}

playGame();

console.log(
  `human score is ${humanScore} and computer score is ${computerScore}`
);
