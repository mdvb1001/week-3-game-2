// GLOBAL VARIABLES
// -----------------------------------------------------------------------
// Arrays and Variables for holding data 
var wordOptions = ["commando", "die hard", "predator", "first blood", "the terminator", "aliens", "raiders of the lost ark", "lethal weapon", "top gun", "robocop", "conan the barbarian", "cobra", "beverly hills cop", "the untouchables", "the delta force", "highlander", "escape from new york", "sudden impact", "frantic", "the dead pool", "karate kid", "kickboxer", "red dawn", "big trouble in little china", "maximum overdrive", "scarface", "blade runner", "tron", "the princess bride", "an american werewolf in london", "indiana jones and the temple of doom", "above the law", "the exterminator"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSucesses = [];
var wrongLetters = [];

// game counters

var winCount = 0;
var lossCount = 0;
var guessesLeft = 12;


// FUNCTIONS (reusable blocks of code that I will call upon when needed)
// -----------------------------------------------------------------------
function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    //  Reset 

    guessesLeft = 12;
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
        if (selectedWord[i] == letter) {
            isLetterInWord = true;
        }
    }
    // Check where in the word the letter exists, then populate out the blanksAndSuccesses array 
    if (isLetterInWord) {
        for (var j = 0; j < numBlanks; j++) {
            if (selectedWord[j] == letter) {
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

    // Update the html to reflect the most recent count stats

    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSucesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

    // Check if user won
    if (lettersInWord.toString() == blanksAndSucesses.toString()) {
        // Update the win counter in the HTML
        // document.getElementById("wordToGuess").innerHTML = blanksAndSucesses.join(" ");
        winCount++;
        document.getElementById("winCounter").innerHTML = winCount;
        setTimeout(function(){
        		alert("You Won!");
        	}, 500);
        setTimeout(function() {
                startGame();
            }, 1000);
        
    }

    // Check if user lost
    else if (guessesLeft === 0) {
        lossCount++;
        alert("You Lost!");
        // Update the HTML 
        document.getElementById("lossCounter").innerHTML = lossCount;
        

        startGame();
    }
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
