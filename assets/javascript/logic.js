// GLOBAL VARIABLES (Accessible by all functions)
// ==================================================================================================
// var bwayPhoto  may hold a photo for related bway show
var wordBank = ["PHANTOM", "CATS", "HAIRSPRAY", "HAMILTON", "RENT", "GREASE"]
var chosenWord = ""; //will hold the word that is randomly chosen. Produced via function.
var lettersGuessed = []; //an array filled by keystrokes entered by the user.  Uses a .push or .appendChild?
var guessesRemaining = chosenWord.length + 4
var wins = 0;
var losses = 0;
var blanks = ["_"]; //will replace the letters in the chosen word once it is split into an array of the letters it contains
var gameOver = 

// FUNCTIONS (These are bits of code that we will call upon to run when needed)
// ==================================================================================================
//Chose word for user to guess.
$(document).ready(function() {
	chosenWord = Math.floor(Math.random() * wordBank.length);

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================
