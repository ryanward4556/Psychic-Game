// Sets up Global variables

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var yourGuesses = [];

// Sets up computer guess array

var computerGuessList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Creates variables to display game on page
var userGuessText = document.getElementById("userguess-text");
var computerGuessText = document.getElementById("computerguess-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessleft-text");
var yourGuessesText = document.getElementById("yourguesses-text");

// Listens for the user to guess

document.onkeyup = function gameStart(event) {
    var userGuess = event.key;

    // Sets up an array to store userGuesses in to be displayed after each guess
    yourGuesses.push(userGuess);

    // chooses a random letter from alphabet

    var computerGuess = computerGuessList[Math.floor(Math.random() * computerGuessList.length)];

    guessCounter();
    userGuessText.textContent = "You guessed: " + userGuess;
    computerGuessText.textContent = "The computer guessed: " + computerGuess;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    yourGuessesText.textContent = "Your guesses so far: " + yourGuesses.join();

};


function guessCounter() {
    console.log(guessesLeft);
    if (guessesLeft === 0) {
        guessesLeftText.textContent = "You Lost";
        guessesLeft = 10;
        console.log(guessesLeft);
        yourGuesses = [];
        yourGuessesText.textContent = "Your guesses so far: " + yourGuesses;
    } else {
        guessesLeft -= 1;
        guessesLeftText.textContent = "Guesses left: " + guessesLeft;

    }
}



