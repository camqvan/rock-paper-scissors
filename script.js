function getComputerChoice() {
  const computerChoice = Math.random();

  if (computerChoice <= 0.33) {
    return 'Rock';
  } else if (computerChoice > 0.33 || computerChoice < 0.66) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

// function getHumanChoice() {
//   const humanChoice = prompt('Rock, Paper or Scissors').trim().toLowerCase();

//   if (
//     humanChoice === 'Paper' ||
//     humanChoice === 'Scissors' ||
//     humanChoice === 'Rock'
//   ) {
//     return humanChoice;
//   } else {
//     alert('choose one of the three options');
//   }
// }

humanScore = 0;
computerScore = 0;

function game() {
  let playerWin = 0;
  let computerWin = 0;
  let gameWinner = '';

  // Add event listener for all three buttons on click
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      humanSelection = button.className;
      computerSelection = getComputerChoice();
      battleWinText.textContent = playRound(humanSelection, computerSelection);
      playerWinText.textContent = 'Player Win Total: ' + playerWin;
      computerWinText.textContent = 'Computer Win Totals: ' + computerWin;
      endGame();
    });
  });

  // play round to determine winner
  function playRound(playerSelection, computerSelection) {
    let tie =
      "It's a Tie! You selected " +
      playerSelection +
      ' and the computer selected ' +
      computerSelection +
      '.';
    let paperBeatRock =
      'You Win!  You selected ' +
      playerSelection +
      ' and the computer selected ' +
      computerSelection +
      '.';
    let scissorsBeatPaperLoss =
      'You lose!  You selected ' +
      playerSelection +
      ' and the computer selected ' +
      computerSelection +
      '.';
    let paperBeatRockLoss =
      'You lose!  You selected ' +
      playerSelection +
      ' and the computer selected ' +
      computerSelection +
      '.';
    let rockBeatScissors =
      'You Win!  You selected ' +
      playerSelection +
      ' and the computer selected ' +
      computerSelection +
      '.';
    let rockBeatScissorsLoss =
      'You lose!  You selected ' +
      playerSelection +
      ' and the computer selected ' +
      computerSelection +
      '.';
    let scissorsBeatPaper =
      'You Win!  You selected ' +
      playerSelection +
      ' and the computer selected ' +
      computerSelection +
      '.';

    if (playerSelection === computerSelection) {
      return tie;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
      playerWin++;
      return paperBeatRock;
    } else if (
      playerSelection === 'Paper' &&
      computerSelection === 'Scissors'
    ) {
      computerWin++;
      return scissorsBeatPaperLoss;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
      computerWin++;
      return paperBeatRockLoss;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
      playerWin++;
      return rockBeatScissors;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
      computerWin++;
      return rockBeatScissorsLoss;
    } else {
      playerWin++;
      return scissorsBeatPaper;
    }
  }

  // create DOM for all results
  const container = document.querySelector('#container');
  const resultsDiv = document.createElement('div');
  resultsDiv.style.marginTop = '20px';
  container.appendChild(resultsDiv);

  // create player win tracker
  const playerWinText = document.createElement('p');
  playerWinText.style.color = 'blue';
  playerWinText.textContent = 'Player Win Totals: ' + playerWin;
  resultsDiv.appendChild(playerWinText);

  // create computer win tracker
  const computerWinText = document.createElement('p');
  computerWinText.style.color = 'blue';
  computerWinText.textContent = 'Computer Win Totals: ' + computerWin;
  resultsDiv.appendChild(computerWinText);

  // create battle win text
  const battleWinText = document.createElement('p');
  battleWinText.style.color = 'black';
  resultsDiv.appendChild(battleWinText);

  // create game win text
  const gameWinText = document.createElement('p');
  gameWinText.style.color = 'orange';
  gameWinText.textContent = gameWinner;
  resultsDiv.appendChild(gameWinText);

  // determine who win 5 points first
  function endGame() {
    if (playerWin === 5) {
      gameWinner = 'YOU WIN';
      gameWinText.textContent = gameWinner;

      // disable game buttons
      document.getElementById('1').disabled = true;
      document.getElementById('2').disabled = true;
      document.getElementById('3').disabled = true;

      // create new replay button
      const playAgainbutton = document.createElement('button');
      playAgainbutton.textContent = 'Play Again!';
      resultsDiv.appendChild(playAgainbutton);

      // reload when click
      playAgainbutton.addEventListener('click', () => {
        location.reload();
      });
    } else if (computerWin === 5) {
      gameWinner = 'COMPUTER WINS!';
      gameWinText.textContent = gameWinner;

      // disable game buttons
      document.getElementById('1').disabled = true;
      document.getElementById('2').disabled = true;
      document.getElementById('3').disabled = true;

      // create new replay button
      const playAgainbutton = document.createElement('button');
      playAgainbutton.textContent = 'Play Again!';
      resultsDiv.appendChild(playAgainbutton);

      // reload when click
      playAgainbutton.addEventListener('click', () => {
        location.reload();
      });
    }
  }
}

game();
