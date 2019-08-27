var playerLetters;
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerLetters;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var winsText = document.getElementById('wins-text');
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-Text");
var guessesSoFarText = document.getElementById("guessessofar-text");
// console.log(computerLetters,"emptyarray");

//Random letter generator for the computer choice, which needs to begin the guessing.
computerLetters = letters[Math.floor(Math.random() * letters.length)];
console.log(computerLetters, "computer guess");
console.log(letters, 'this is the letters array');



// player chooses letters to answer computer choice
document.onkeyup = function (event) {
    var playerLetters = event.key;
    letters.push(playerLetters);   //push the letters to the guesses so far array  check mdn arrays - join?  or what.
    for (var i = 0; i < playerLetters.length; i++) {
        console.log(playerLetters.charAt(i));
    }
    //test if playerLetters equals computerLetters, if true it increments wins by 1, if false player gets additional tries up to 10 times.  Display guesses so far.
    if (playerLetters === computerLetters) {
        wins = wins + 1;  // wins += 1
    } else if (playerLetters !== computerLetters) {
        guessesLeft--;
        guessesSoFar;
    } 
    
    if ((playerLetters !== computerLetters) && (guessesLeft === 0)) {
        losses++;
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

//function restart (this); {
