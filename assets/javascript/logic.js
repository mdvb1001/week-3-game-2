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
// MAIN PROCESS 
// -----------------------------------------------------------------------
startGame(); 
