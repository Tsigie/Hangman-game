var wordList = ["kimpa","paul","mia","greg","lisa"];

var chosenWords = "";
var letterInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

function startGame(){

var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];
 chosenWord = wordList[Math.floor(Math.random() = wordList.length)];
 letterInChosenWord = chosenWord.split("");
 numBlanks = letterInChosenWord.length;
console.log(chosenWord);
console.log(numBlanks)

for (var i = 0; i < wordList.length; i++) 

	console.log("inside our checkletter function", blanksAndSuccesses);

}

function checkLetters(letter){

	var letterInWord = false;
	
	for(var i = 0; i < numBlanks; i++){
		if(chosenWords[i] === letter){
			letterInWord = true;
		}

	}
	if(letterInWord){
		for(i = 0; i < numBlanks; i++){
			if(chosenWords[i]){
				blanksAndSuccesses[i] = letter;
			}
consle.log()			
		}
	}
console.log("our wrong guesses in checkletter function", wrongGuesses)

}

function roundComplete(){
 	document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
 	document.getElementById('guesses-left')innerHTML = numGuesses;
 	document.getElementById('wrong-guesses')innerHTML = wrongGuesses.join(" ");

 	console.log(letterInChosenWord);
 	console.log(blanksAndSuccesses);
 	if(letterInChosenWord.join === blanksAndSuccesses){
 		winCounter++;
 		alert("You win!");
 		document.getElementById('win-counter').innerHTML = wincounter;
 	}else if(numGuesses === 0){
 		document.getElementById('loss-counter').innerHTML = lossCounter++;
 		alert("you don't have any more guesses");
 		startGame();
 	}
}
startGame();
document.onkeyup = function(event){

	var letterGuessed = string.fromCharcode(event.keycode).toLowerCase();
	console.log("this is the letter we typed", letterGuessed);
	checkLetters(letterGuessed);

	 
}

