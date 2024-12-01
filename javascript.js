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

function playRound() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  if (humanSelection === computerSelection) {
    return 'tie';
  } else if (humanSelection === 'rock') {
    {
      if (computerSelection === 'paper') {
        computerScore++;
        return 'computer win';
      } else if (computerSelection === 'scissors') {
        humanScore++;
        return 'human win';
      }
    }
  } else if (humanSelection === 'paper') {
    if (computerSelection === 'rock') {
      humanScore++;
      return 'human win';
    } else if (computerSelection === 'scissors') {
      computerScore++;
      return 'computer win';
    } else if (humanSelection === 'scissors') {
      if (computerSelection === 'paper') {
        humanScore++;
        console.log('human win');
      } else if (computerSelection === 'rock') {
        computerScore++;
        console.log('computer win');
      }
    }
  }
}

function playGame() {
  let game = 1;
  while (game < 6) {
    console.log(`Game ${game}: ${playRound()}`);
    game++;
  }

  console.log(
    `human score is ${humanScore} and computer score is ${computerScore}`
  );

  if (humanScore > computerScore) {
    console.log('human is the winner');
  } else if (computerScore > humanScore) {
    console.log('computer is the winner');
  } else {
    console.log('tie');
  }
}

playGame();
