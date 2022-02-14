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




function magicBall() {

    let listOfResposes = ["Maybe", "Yes", "Doubt It", "Ask Later", "Does It Matter?", "What do you think?", "Please Shake Again Later", 
    "I Really Don't Want To Say", "I Rather You Ask Someone Else", "Ask Your Bestfriend", "Don't Look At, I Don't Have The Answer", "Perhaps", "A-B-S-O-L-U-T-E-L-Y", "BIG YES", "BIG NO", 
    "MAKING IT SO", "I'll ask the Genie", "Genie Says Yes", "Genie Just Laughed...", "Clap and It Will Be", "Butter Not Expect It", "Koala Tea Time right now please don't disturb", 
    "Future Looks Bright", "Believe In The Heart Of The Cards", "Never Give Up, Never Surrender", "Only If You Try", "Don't Doubt It" ];





    let randomNum = Math.random();
    let randomAnswer = Math.floor(randomNum * listOfResposes.length )

    alert(listOfResposes[randomAnswer]);
}
