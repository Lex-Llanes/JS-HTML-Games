/********************************************************************************/
/*********************************COIN  FIP GAME*********************************/
let target = document.getElementById("result").innerHTML;
let coinFlipWins = 0;


function submitFlipGuess () {
    //let coinFlipBoard = document.getElementById("coinflip");
    //let coinFlipRender = document.createElement("p")


    let userFlipGuess = document.forms["coinFlipGame"]["guessFlip"].value;
    let flip = Math.floor(Math.random() * 100);
    let flipSide = "";


    if(userFlipGuess == null || userFlipGuess == ""){
        writeResult("Please submit a guess");
    } else{

        if(flip % 2 === 0){
            flipSide = "Coin Flips to Heads";
            alert(flipSide);
            if(userFlipGuess === "Heads" || userFlipGuess === "heads" || userFlipGuess === "Head" || userFlipGuess === "head"){
                alert("You guessed heads right!");
                coinFlipWins++
                alert(coinFlipWins)
            } else {
                alert("Sorry try again");
            }
        }

        if(flip % 2 != 0){
            flipSide = "Coin Flips To Tails";
            alert(flipSide);
            if(userFlipGuess === "Tails" || userFlipGuess === "tails" || userFlipGuess === "Tail" || userFlipGuess === "tail"){
                alert("You guessed tails right!");
                coinFlipWins++
                alert(coinFlipWins)
            } else {
                alert("Sorry try again");
                }
            }

    }
}


/*THIS IS SUPPOSE TO WRITE TO THE HTML*/
// function writeResult (result) {
//     target = document.getElementById("result").innerHTML = result;
// }







/********************************************************************************/
/**********************************GUESING GAME**********************************/

//DEFAULT GAME DIFFICULTY
let gameDifficulty = 1;
document.getElementById(currentDiff).innerHTML = "gameDifficulty";


//ADJUST'S THE GAME'S DIFFICULTY
function adjustDiff() {
    gameDifficulty = document.getElementById("difficulty").value;
    targetCurrentDiff.appendChild(document.createTextNode(gameDifficulty));
}

//CHECKS THE GAMES DIFFICULTY
function checkDifficulty() {
    alert(gameDifficulty);
}




function guessingGame () {
    alert(gameDifficulty);
let hiddenNum = Math.floor(Math.random() * 10 + 1);
let userNumInput = document.forms["guessingGame"]["guess"].value;
alert(gameDifficulty);
alert(hiddenNum);
    if(userNumInput == hiddenNum){
        alert("You guessed correct!")
    } else {
        alert("Guess again!")
    }
}







/********************************************************************************/
/**********************************MAGIC EIGHT BALL**********************************/





