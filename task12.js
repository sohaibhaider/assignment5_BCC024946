var guess;
var playAgain;
var chance;
var win;
var rNum;
var winCount = 0;
var loseCount = 0;

guessNumber();
console.log("GAME OVER");

function guessNumber(){
    rNum = numberGenerator();
    playAgain = false;
    chance = 3;
    win = false;

    do{
        guess = parseInt(prompt("Please Enter Number you Guessed:\n(Chances left = "+chance+")", 10));
        console.log("Random Number = "+rNum+", Guessed Number = "+guess);

        if(guess == rNum){
            win = true;
            alert("You are right, You won\nResults: Won "+(++winCount)+", Lost "+loseCount);
            break;
        }
        else if(chance > 0){
            chance--;
            alert("Incorrect, Please try again");
        }

        if(chance == 0){
            alert("You Lose\nResults: Won "+winCount+", Lost "+(++loseCount));
            break;
        }
    }
    while(win == false);

//Condition for Default behaviour (Note: playAgain is of Boolean Type)
    if(prompt("Do you want to play again? Y = Yes", 'Y') == 'Y'){
        playAgain = true;
    }

//confirm() used in place of prompt() which returns 'true' if pressed 'OK' (Note: playAgain is of Boolean Type)
    //playAgain = confirm("Do you want to play again?")
    
    if(playAgain == true){
        guessNumber();
    }
    else{
        return alert("Thank you for playing with us today\nFinal Result: Won "+winCount+", Lost "+loseCount);
    }
}

function numberGenerator(){
    return Math.ceil(Math.random()*100);
}