//Define a global variable that contains the game choices
const choices = ["rock", "paper", "scissors"]

//Define a function to play the game for 5 rounds on the console
function game() {
    playRound();
}

//Define a function to play one round
function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

//Get the input from the player
function playerChoice() {
    let input = prompt("Choose Rock, Paper, or Scissors");
    //Make the input lower case to standardize comparisons
    input = input.toLowerCase();
    console.log(input)
}

//Get a random input from the computer
function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

game();