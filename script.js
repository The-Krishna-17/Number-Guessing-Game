// Declaring variables
const minNum = 1;
const maxNum = 100;
const randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let flag = true; // Correct flag initialization
let NumberOfGuess = 0; // Initialize number of guesses

// Selecting elements
const guessBtn = document.querySelector('#guess');
const msg = document.querySelector('#msg');

// Add event listener for the Guess button
guessBtn.addEventListener('click', function() {
    // Get the guessed number from input and convert to a number
    let guessedNumber = Number(document.querySelector('#input-number').value);
    NumberOfGuess++;  // Increment the number of guesses

    if (guessedNumber < 1 || guessedNumber > 100) {
        msg.innerHTML = 'Please enter a number between 1 and 100 only.';
    } 
    else if (guessedNumber === randomNumber) {
        msg.innerHTML = `You guessed it right! It took you ${NumberOfGuess} attempts.`;
        flag = false;  // Stop the game
    } 
    else if (guessedNumber < randomNumber) {
        msg.innerHTML = 'Too low! Try again.';
    } 
    else if (guessedNumber > randomNumber) {
        msg.innerHTML = 'Too high! Try again.';
    }
});
