//Define a global variable that contains the game choices
const choices = ["rock", "paper", "scissors"];
const winners = [];

//Define a function to play the game for 5 rounds on the console
function game() {
    for (let i = 1; i <= 5; i++){
        playRound(i);
    }
    logWins();
}

//Define a function to play one round
function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection,computerSelection,winner,round)
}

//Get the input from the player
function playerChoice() {
    let input = prompt("Choose Rock, Paper, or Scissors");
    while (input == null) {
        input = prompt("Choose Rock, Paper, or Scissors");
      }
    //Make the input lower case to standardize comparisons
    input = input.toLowerCase();
    //Check if the input is valid or not with a function
    let check = validateInput(input);
    while (check == false) {
        input = prompt("Please, type a valid answer.");
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

//Get a random input from the computer
function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

//Create a function to validate whether user input is correct or not
function validateInput(choice) {
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "Tie";
    } else if (
        (choiceP === "rock" && choiceC === "scissors") ||
        (choiceP === "paper" && choiceC === "rock") ||
        (choiceP === "scissors" && choiceC === "paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function logWins() {
    let playerWins = winners.filter(item => item == "Player").length;
    let computerWins = winners.filter(item => item == "Computer").length;
    let ties = winners.filter(item => item == "Tie").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
}
function logRound(playerChoice, computerChoice, winner, round) {
    console.log("Round:", round);
    console.log("Player Chose:", playerChoice);
    console.log("Computer Chose:", computerChoice);
    if (winner == "Player" || winner == "Computer") {
        console.log(winner, "Won the Round");
    } else {
        console.log(`It's a ${winner}!`)
    }
    console.log("-------------------------------");
}
game();