


//1. 'Guess what letter I'm thinking of...' variable for computer's "guess", which would need to start the game

var computerLetter = computerLetter;
var letters = "abcdefghijklmnopqrstuvwxyz"

//Generates random number (decimal from 0 to 1) which is multiplied by 26 and the rounded down to the nearest whole number by the Math.floor method. 
computerLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(computerLetter);

