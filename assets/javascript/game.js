// GLOBAL VARIABLES (Accessible by all functions)
// ==================================================================================================
// var bwayPhoto  may hold a photo for related bway show
var wordBank = ["phantom", "cats", "hairspray", "hamilton", "rent", "grease"]
var chosenWord = ""; //will hold the word that is randomly chosen. Produced via function. working
var guess; // will take keyboard input from user.. working
var lettersGuessed = []; //an array filled by keystrokes entered by the user.  Uses a .push or .appendChild? Working
var guessesRemaining = 7;
var wins = 0;
var losses = 0;
var blanks = []; //will replace the letters in the chosen word once it is split into an array of the letters it contains. Working
var wordSplit = []; //working
// var gameOver = 

// FUNCTIONS (These are bits of code that we will call upon to run when needed)
// ==================================================================================================
//create an object to hold several functions that will define parts of the game
var onStart = {


    //function to hold a word from the wordbank chosen at random. this will be the word the player is trying to guess
    wordChoice: function() {
        chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)]; //choose random word from word bank.
        console.log(chosenWord); //to test and show hidden word
    },
    wordSplit: function() {
        //if (chosenWord){
        for (i = 0; i < chosenWord.length; i++)
            wordSplit = chosenWord.split("");
        console.log(wordSplit);
        //} //closing if(chosenWord) statement
    }, // closing wordSplit key and function
    wordDashed: function() {
        for (i = 0; i < wordSplit.length; i++)
            blanks.push("_");
        console.log(blanks);
    }, //closing wordDashed
    guesstimation: function() {
        document.onkeyup = function(event) {
                //var letters = /^[a-zA-Z]+$/;
                //if (event.value.match(somethinghere?)){
                guess = String.fromCharCode(event.keyCode).toLowerCase();
                //guessesRemaining =  + 3;
                console.log(guessesRemaining);
                //} else {
                //alert("Please enter only alpha characters!");
                //return false;
                // }//closing if statement checking for alpha characters
                console.log(guess);

                ///check to see if user entry is in array.
                //if it is warn user and if not add letter to array of letters guessed
                // if (lettersGuessed.indexOf(guess) > -1){
                // 	alert("You have already entered that letter!");
                // } else {
                // 	lettersGuessed.push(guess);
                // 	onStart.wordcompare(guess);
                // };//closing if statement
                if (guess && lettersGuessed.indexOf(guess) > -1) {
                    alert("Already chose that one");
                } else if (guess && wordSplit.indexOf(guess) == -1 && lettersGuessed.indexOf(guess) == -1) {
                    lettersGuessed.push(guess);
                    guessesRemaining--;
                } else { // may need an additional condition to keep guess == true
                    for (i = 0; i < wordSplit.length; i++)
                        if (wordSplit[i] == guess) {
                            blanks[i] = guess;
                            //lettersGuessed.push(guess);

                        }
                }
                if (blanks.indexOf("_") == -1 && guessesRemaining > 0){
                    wins++;
                   // reset();
                } else if (blanks.indexOf("_") > -1 && guessesRemaining === 0){
                    losses++;
                    //reset();
                }
								onStart.printGuessRemainder(); //FIX: update UI
								onStart.printWordToGuess(); //FIX: update UI
								onStart.printLettersGuessed(); //FIX: update UI
                                onStart.printWins();
                                onStart.printLosses();

                console.log(lettersGuessed);
                console.log(guessesRemaining);
               
            } //closing the document on key up function for guessing the letter
    }, //close the guesstimation function
    printGuessRemainder: function() {
        var countedGuesses = document.getElementById("remainder");
        countedGuesses.innerHTML = guessesRemaining;
    },
    printWordToGuess: function() {
        var split = document.getElementById("wordtoguess");
        split.innerHTML = blanks.join(" "); // FIX: join avoids comma
    },
    printLettersGuessed: function() {
        var letters = document.getElementById("lettersguessed");
        letters.innerHTML = lettersGuessed;
    },
    printWins: function(){
        var winnings = document.getElementById("wins");
        winnings.innerHTML = wins;
    },
    printLosses: function(){
        var losings = document.getElementById("losses");
        losings.innerHTML = losses;
    },
    //put this function into the guestimation function and follow your pseudocode as to what happens.  change == guess to letter and call function with (guess)
    // wordcompare: function(letter){ //use onKeycode.
    // 		for (i = 0; i < wordSplit.length; i++)
    // 			if (wordSplit[i] == letter){
    // 				blanks[i] = letter;
    // 			}//else{
    // 			//guessesRemaining = guessesRemaining -1;
    // 			//}//closing the else
    // 			}//close function
    //},
    //},
}; // closing the object onStart

// var reset = function(){
// wordBank = ["phantom", "cats", "hairspray", "hamilton", "rent", "grease"]
// chosenWord = ""; //will hold the word that is randomly chosen. Produced via function. working
// guess; // will take keyboard input from user.. working
// lettersGuessed = []; //an array filled by keystrokes entered by the user.  Uses a .push or .appendChild? Working
// guessesRemaining = 7;
// //wins = 0;
// //losses = 0;
// blanks = []; //will replace the letters in the chosen word once it is split into an array of the letters it contains. Working
// wordSplit = []; 
// };



onStart.wordChoice();
onStart.wordSplit();
onStart.wordDashed();
onStart.guesstimation();
onStart.printLettersGuessed();
onStart.printGuessRemainder();
onStart.printWordToGuess();
onStart.printWins();
onStart.printLosses();
// onStart.wordcompare();

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================================================