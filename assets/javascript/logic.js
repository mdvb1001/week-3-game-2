// GLOBAL VARIABLES
// -----------------------------------------------------------------------
// Arrays and Variables for holding data 
var wordOptions = ["pluto", "mars", "venus", "jupiter", "neptune"]; 
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSucesses = [];
var wrongLetters = [];

// game counters

var winCount = 0;
var lossCount = 0;
var guessesLeft  = 9;


// FUNCTIONS (reusable blocks of code that I will call upon when needed)
// -----------------------------------------------------------------------
function startGame () {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersInWord = selectedWord.split(""); 
	numBlanks = lettersInWord.length; 

	//  Reset 

	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSucesses = [];

	// Populate blanks and successes with the right number of blanks

	for (var i = 0; i < numBlanks; i++) {
		blanksAndSucesses.push("_"); 
	}

	// Change html to reflect game round conditions
	document.getElementById("wordToGuess").innerHTML = blanksAndSucesses.join(" "); 
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;


	console.log(selectedWord);
	console.log(lettersInWord);
	console.log(numBlanks); 
	console.log(blanksAndSucesses);

} 

function checkLetters(letter) {
	// Check if letter exists in code at all
	var isLetterInWord = false;

	for (var i = 0; i < numBlanks; i++) {
		if(selectedWord[i] == letter) {
			isLetterInWord = true;
		}
	}	
	// Check where in the word the letter exists, then populate out the blanksAndSuccesses array 
	if(isLetterInWord) {
		for (var j = 0; j < numBlanks; j++) {
			if(selectedWord[j] == letter) {
				blanksAndSucesses[j] = letter;
			}
		}
	}
	// Letter was not found
	else {
		wrongLetters.push(letter);
		guessesLeft--;
	}	
	// Testing / debugging 
}

function roundComplete() {
	console.log("Win Count: " + winCount + "| Loss Count: " + lossCount + "| Guesses Left: " + guessesLeft);

	// Check if user won
	if(lettersInWord.toString() == blanksAndSucesses.toString()) {
		winCount++;
		alert("You Won!");

		// Update the win counter in the HTML
		document.getElementById("winCounter").innerHTML = winCount;
		startGame();
	}

	// Check if user lost


}
// MAIN PROCESS p
// -----------------------------------------------------------------------

// Initiates the code the first time
startGame(); 

// Register Keyclicks

document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();

	// Testing and Debugging	
	console.log(letterGuessed);
};