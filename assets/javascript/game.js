window.onload = function(){
    var wordList = [
        "dragonborn",
        "shout",
        "daedra",
        "greybeards",
        "stormcloaks",
        "imperials",
        "nightingales",
        "thief",
        "archmage",
    ]
    var wins = 0;
    var losses = 0;
    var gameOn = false;
    var guessesRemaining = 10;
    var correctArray = [];
    var incorrectArray = [];
    var inputArray = [];
    var randomWord = "";

    alert('Welcome! Press "New Game" to begin!');
    
    function newGame(){
        gameOn = true;
        guessesRemaining = 10;
        correctArray = [];
        incorrectArray = [];
        inputArray = [];
        randomWord = wordList[Math.floor(Math.random() * wordList.length)];

        console.log(randomWord);
        for(i=0; i<randomWord.length; i++){
            inputArray.push("_");
        }
        document.getElementById("guessesRemaining").textContent = guessesRemaining;
        document.getElementById("initialUnderscores").textContent = inputArray.join(" ");
        document.getElementById("incorrectLetters").textContent = incorrectArray;
    }     
    
    function guessedLetter(letter){

        if(gameOn === true && correctArray.indexOf(letter) === -1){
            correctArray.push(letter);
            for(i=0; i<randomWord.length; i++){
                if(randomWord[i].toLowerCase() === letter.toLowerCase()){
                    inputArray[i] = randomWord[i];
                }
            }

            document.getElementById("initialUnderscores").textContent = inputArray.join(" ");
            incorrectGuess(letter);
        }
        
        
    }

    function incorrectGuess(letter){
        if(inputArray.indexOf(letter.toLowerCase()) === -1){
            guessesRemaining = guessesRemaining -1;
            incorrectArray.push(letter);
            document.getElementById("incorrectLetters").textContent = incorrectArray.join(",");
            document.getElementById("guessesRemaining").textContent = guessesRemaining;
        }
        loseGame();
    }

    function loseGame(){
        if(guessesRemaining === 0){
            losses = losses +1;
            gameOn = false;
            document.getElementById("losses").textContent = losses;
            alert('Too bad! Press "New Game" to try again!');
        }
        winGame();
    }

    function winGame(){
        if(randomWord.toLowerCase() === inputArray.join('').toLowerCase()){
            wins = wins +1;
            gameOn = false;
            document.getElementById("wins").textContent = wins;
            alert('Great Job! Press "New Game" to try again!');
        }
    }

    
    document.getElementById("playAgain").addEventListener("click", newGame);
    document.onkeyup = function(event) {
        if(event.keyCode >= 65 && event.keyCode <= 90){
            guessedLetter(event.key);
        }
    }
}