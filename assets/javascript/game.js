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

//Random letter generator for the computer choice, which has to begin the guessing.
computerLetters = letters[Math.floor(Math.random() * letters.length)];
//console.log(computerLetters);


// }
document.onkeyup = function (event) {
    var playerLetters = event.key;

    //test if players guess equals ranLetter, if true it increments wins by 1, and clears used letters array. Supposed to reset guess # to 10 but starts at 9 instead, 
    if (playerLetters === computerLetters) {
        wins++;
    } if (playerLetters !=== computerLetters)
        guessesLeft-1;

    } if (playerLetters !=== computerLetters && (guessesLeft - 1 === 0)) {
        losses++;

    winsText.textContent = "Wins:  " + wins;
    lossesText.textContent = "Losses:  " + losses;
    guessesleftText.textContent = "Guesses Left:  " + guessesLeft;
    guessessofarText.textContent = "Guesses So Far:  " + guessesSoFar;



};


    // var wins
    // if (playerLetters === computerLetters) {
    //     wins++;
    // } else if (playerLetters != computerLetters &&
    //     guessesLeft - 1 === 0) {
    //         losses++;

    //     }


    //     var playerLetters = document.getElementById("playerLetters");
    //     var guessesLeftText = document.getElementById("guessesLeft-Text");
