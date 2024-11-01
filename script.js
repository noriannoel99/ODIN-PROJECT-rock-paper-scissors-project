function getComputerChoice() {
  let computerChoice = "";
  let ramdomIndex = Math.random();

  if (ramdomIndex < 0.33) {
    computerChoice = "ROCK";
  } else if (ramdomIndex < 0.66) {
    computerChoice = "PAPER";
  } else {
    computerChoice = "SCISSORS";
  }

  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("rock, paper or scissors?").toUpperCase();

  if (
    humanChoice === "ROCK" ||
    humanChoice === "PAPER" ||
    humanChoice === "SCISSORS"
  ) {
    return humanChoice;
  } else {
    alert("please Insert either Rock, Paper or scissors");
    return getHumanChoice();
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let drawScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Draw!");
      drawScore++;
    } else if (
      (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
      (humanChoice === "SCISSORS" && computerChoice === "PAPER") ||
      (humanChoice === "PAPER" && computerChoice === "ROCK")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  console.log(
    `Scores - Human: ${humanScore}, Computer: ${computerScore}, Draws: ${drawScore} `
  );
}

playGame();

/* get computer answer (randomize using math)
   get human answer
   check answer
   tell*/
