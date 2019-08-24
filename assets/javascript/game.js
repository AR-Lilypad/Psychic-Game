


//1. 'Guess what letter I'm thinking of...' variable for computer's "guess", which would need to start the game

var computerLetter = computerLetter;
var playerLetter = playerLetter;
var letters = "abcdefghijklmnopqrstuvwxyz"
var guessesLeft = 9;
var wins = 0;
var losses = 0;

var playerLetter = document.getElementById("playerLetter");
var guessesLeftText = document.getElementById("guessesLeft-Text");


//Generates random number (decimal from 0 to 1) which is multiplied by 26 and the rounded down to the nearest whole number by the Math.floor method. 
computerLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(computerLetter);

//user's turn
//.onkeyup initiate's player's selection as playerletter
document.onkeyup = function (event) {
    var playerLetter = event.key;
    playerLetter = letters[Math.floor(Math.random() * letters.length)];

    //if player's guess equals computerLetter, player wins gains score of 1, and clears used letters array. Supposed to reset guess # to 10 but starts at 9 instead, 
    if (playerLetter === computerLetter) {
        wins++;
    } else if (playerLetter != computerLetter &&
        guessesLeft - 1 === 0) {
        losses++;
         
};


// Hide the directions
//compLetterText.textContent = "";

// Display the user and computer guesses, and wins/losses/ties.

document.getElementById("playerLetter");
//playerLetterText = "Tap any letter a - z..."  + playerLetter;
//guessesLeftText = "Your guesses left are  " + guessesLeft;
}