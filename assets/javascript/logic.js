// GLOBAL VARIABLES (Accessible by all functions)
// ==================================================================================================
var bwayPhoto
var bwayTitle = ["phantom", "cats", "hairspray", "hamilton"]
var usersGuess = [];
var guessesAvailable = 
var guessesLeft = guessesAvailable - 1;
var wins = 0;
var start = "";
var lettersguessed = [];


// FUNCTIONS (These are bits of code that we will call upon to run when needed)
// ==================================================================================================
document.onkeyup = function(){
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userguess);
}

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================
