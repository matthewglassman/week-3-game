// GLOBAL VARIABLES (Accessible by all functions)
// ==================================================================================================
// var bwayPhoto  may hold a photo for related bway show
var wordBank = ["phantom", "cats", "hairspray", "hamilton", "rent", "grease"]
var chosenWord = ""; //will hold the word that is randomly chosen. Produced via function.
var lettersGuessed = []; //an array filled by keystrokes entered by the user.  Uses a .push or .appendChild?
var guessesRemaining = chosenWord.length + 4
var wins = 0;
var losses = 0;
var blanks = ["_"]; //will replace the letters in the chosen word once it is split into an array of the letters it contains
var wordSplit = [];
// var gameOver = 

// FUNCTIONS (These are bits of code that we will call upon to run when needed)
// ==================================================================================================
//create an object to hold several functions that will define parts of the game
var onStart = {
//function to hold a word from the wordbank chosen at random. this will be the word the player is trying to guess
	wordChoice:	function() {
		chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)]; //choose random word from word bank.
		console.log(chosenWord); //to test and show hidden word
		},
	wordDashed: function() {
		//if (chosenWord){
			for (i = 0; i < chosenWord.length; i++)
			wordSplit = chosenWord.split("");
			console.log(wordSplit); 
			//} //closing if(chosenWord) statement
		},// closing wordDashed key and function
	}// closing the object onStart
		
onStart.wordChoice();
onStart.wordDashed();



// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================
