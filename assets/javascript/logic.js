// GLOBAL VARIABLES (Accessible by all functions)
// ==================================================================================================
// var bwayPhoto  may hold a photo for related bway show
var wordBank = ["phantom", "cats", "hairspray", "hamilton", "rent", "grease"]
var chosenWord = ""; //will hold the word that is randomly chosen. Produced via function.
var guess;// will take keyboard input from user
var lettersGuessed = []; //an array filled by keystrokes entered by the user.  Uses a .push or .appendChild?
var guessesRemaining = chosenWord.length + 4
var wins = 0;
var losses = 0;
var blanks = []; //will replace the letters in the chosen word once it is split into an array of the letters it contains
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
	wordSplit: function() {
		//if (chosenWord){
			for (i = 0; i < chosenWord.length; i++)
			wordSplit = chosenWord.split("");
			console.log(wordSplit);
			//} //closing if(chosenWord) statement
		},// closing wordSplit key and function
	wordDashed: function(){
			for (i = 0; i < wordSplit.length; i++)
				blanks.push("_");
				console.log(blanks);
		},//closing wordDashed
	guesstimation: function(){
			document.onkeyup = function(event){
				//var letters = /^[a-zA-Z]+$/;
				//if (event.value.match(somethinghere?)){
				guess = String.fromCharCode(event.keyCode).toUpperCase();
				//return true;
				//} else {
				//alert("Please enter only alpha characters!");
				//return false;
				// }//closing if statement checking for alpha characters
				console.log(guess);
				//console.log(lettersGuessed);
			}//closing the document on key up function for guessing the letter
	},//close the guesstimation function


	}// closing the object onStart
		
onStart.wordChoice();
onStart.wordSplit();
onStart.wordDashed();
onStart.guesstimation();


// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================
