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
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessleft-text");
var yourGuessesText = document.getElementById("yourguesses-text");
var startText = document.getElementById("start-text");


// Displays directions for game
startText.textContent = "Guess a letter to start!";


// Listens for the user to guess
document.onkeyup = function gameStart(event) {
    var userGuess = event.key;
    startText.style.display = "none";

    // Adds to userGuesses array in to be displayed after each guess
    yourGuesses.push(userGuess);

    // chooses a random letter from alphabet
    var computerGuess = computerGuessList[Math.floor(Math.random() * computerGuessList.length)];

    // calls function to track score
    scoreTracker(userGuess, computerGuess);

    //
    userGuessText.textContent = "You guessed: " + userGuess;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    yourGuessesText.textContent = "Your guesses so far: " + yourGuesses.join();
    guessesLeftText.textContent = "Guesses left: " + guessesLeft;
};

// Increases wins if user guesses correctly and losses if not. Also resets guessesLeft 
function scoreTracker(user, comp) {
    if (user === comp) {
        wins += 1;
    } else if (guessesLeft <= 1) {
        losses += 1;
        guessesLeft = 10;
        yourGuesses = [];
        yourGuessesText.textContent = "Your guesses so far: " + yourGuesses;
    } else {
        guessesLeft -= 1;
    }


}





