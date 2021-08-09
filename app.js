/* Game function
-player must guess a number between min and max
-player gets a certain amout of guesses
-notify player of guesses remaining
-notify plater of the correct answe if they lose
-let platey choose to play again
*/

//game values

let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements

const game = document.querySelector('#game'),
      minnum = document.querySelector('.min-num'),
      maxnum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI min and Man

minNum.textContent = min;
maxnum.textContent = max;

//create event listener for button

guessBtn.addEventListener(click, function(){
    let guess = parseInt(guessInput.value);

// play agin event listener
 game.addEventListener('mousedown', function(e){
     if(e.target.className === 'play-again'){
         window.location.reload();
     }
 })

    //validate

    if(isNaN (guess) || guess < min || guess > max){
        setMessage(`Please enter a number ${min} and ${max}`, 'red');
    }

    //check if won

    //game over won


    if(guess === winningNum){

        gameOver(true, `${winningNum} is correct, YOU WIN!`)
/*//disable input

    guessInput.disabled = true;

    // change norder color
    guessInput.style.borderColor = "green";
   
    //set message

    setMessage(`${winningNum} is correct, YOU WIN!`, 'green'); */

} else{
        //wrong number
    guessesLeft -= 1;

        if(guessesLeft === 0){

        //game over - lost
        gameOver(false , `Game over, you loast. The is correct number was ${winningNum}`)

}  else {

    // change border color

    guessInput.style.borderColor = "red";
    
    //clear input

    guessInput.value = '';

    //tell user it is the wrong number

    setMessage(`${guess} is not correct, ${guessesLeft} guesses`, 'red');

        }

    }
})

//game over function

function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : 'red';

    //disable input

    guessInput.disabled = true;

    // change norder color
    guessInput.style.borderColor = color;

    // set text color

    message.style.color = color;
   
    //set message

    setMessage(msg);

    //play again

    guessBtn.value = 'Play Again';

    guessBtn.className += 'play-again';
}
// get winning number 

function getRandomNum(min, max){
  return Math.floor(Math.random()*(max -min + 1)+ min);
}
//set message

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}







