var playerLetters;
var wins = 0;
var lost = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerLetters;
var letters = "qwertyuiopasdfghjklzxcvbnm"

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-Text");
var guessesSoFarText = document.getElementById("guessessofar-text");

//Random letter generator for the computer choice, which needs to begin the guessing.
computerLetters = letters[Math.floor(Math.random() * letters.length)];
console.log(computerLetters);


// player chooses letters to answer computer choice
document.onkeyup = function (event) {
    var playerLetters = event.key;

    //test if playerLetters equals computerLetters, if true it increments wins by 1, if false player gets additional tries up to 10 times.  Display guesses so far.
    if (playerLetters === computerLetters) {
        wins++;
    } else if (playerLetters !== computerLetters) {
        guessesLeft--;
        guessesSoFar;
    } else ((playerLetters !== computerLetters) && (guessesLeft === 0)) ;
        losses++;
    }

//function restart (this); {



winsText.textContent = "Wins:  " + wins;
lossesText.textContent = "Losses:  " + losses;
guessesleftText.textContent = "Guesses Left:  " + guessesLeft;
guessessofarText.textContent = "Guesses So Far:  " + guessesSoFar;
