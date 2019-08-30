//game variables

var playerLetters;
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerLetters;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var playAgain;

var winsText = document.getElementById('wins-text');
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-Text");
var guessesSoFarText = document.getElementById("guessessofar-text");
// need to console.log(computerLetters, to "emptyarray");

//Random letter generator for the computer choice, which needs to begin the guessing.
computerLetters = letters[Math.floor(Math.random() * letters.length)];
console.log(computerLetters, "computer guess");
console.log(letters, 'this is the letters array');

document.onkeyup = function (event) {                    // player chooses letters to answer computer choice    
    var playerLetters = event.key;
    for (var i = 0; i < playerLetters.length; i++) {
        guessesSoFar.push(playerLetters.charAt(i));     //push the letters to the guesses so far array  check mdn arrays - join?  
    }
    //test if playerLetters equals computerLetters, if true it increments wins by 1, if false player gets additional tries up to 10 times.  Display guesses so far.
    if (playerLetters === computerLetters) {
        wins = wins + 1;                                       // wins += 1
        alert("You won! Hmmm do you have psychic powers?");
        playAgain = confirm("Want to play again?");
        // playAgain();

        if (playAgain === true) {                          // ((how do I) break this function out on it's own and call the function for win AND lose?
            computerLetters = letters[Math.floor(Math.random() * letters.length)];
            console.log(computerLetters);
            guessesLeft = 9;
            console.log(guessesLeft);
            guessesSoFar = [];
        }

    } else if (playerLetters !== computerLetters) {
        guessesLeft--;
        guessesSoFar;
    }

    if ((playerLetters !== computerLetters) && (guessesLeft < 0)) {
        losses++;
        alert("Nah, you're not a psychic... at least this time around!");
        playAgain = confirm("Want to play again?");

        if (playAgain === true) {
            computerLetters = letters[Math.floor(Math.random() * letters.length)];
            console.log(computerLetters);
            guessesLeft = 9;
            console.log(guessesLeft);
            guessesSoFar = [];
        }
    }

    winsText.textContent = "Wins:  " + wins;
    lossesText.textContent = "Losses:  " + losses;
    guessesLeftText.textContent = "Guesses Left:  " + guessesLeft;
    guessesSoFarText.textContent = "Guesses So Far:  " + guessesSoFar;
}
winsText.textContent = "Wins:  " + wins;
lossesText.textContent = "Losses:  " + losses;
guessesLeftText.textContent = "Guesses Left:  " + guessesLeft;
guessesSoFarText.textContent = "Guesses So Far:  " + guessesSoFar;


