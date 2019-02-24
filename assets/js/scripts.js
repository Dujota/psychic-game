var wins = 0;
var losses = 0;
var guessLeft = 10;
var userGuesses = [];
var randomLetter;
var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

// UI elements
winsElement = () => {
  return (document.querySelector('.wins').innerHTML = wins);
};

lossesElement = () => {
  return (document.querySelector('.losses').innerHTML = losses);
};

guessesLeftElement = () => {
  return (document.querySelector('.guessesLeft').innerHTML = guessLeft);
};

userGuessElement = () => {
  return (document.querySelector('.userGuess').innerHTML = userGuesses);
};

// This generates an index that is passed to the array
compChoice = () => {
  randomLetter =
    letters[Math.floor(Math.random() * Math.floor(letters.length))];
};

showError = error => {
  alert(error);
};

reset = () => {
  guessLeft = 10;
  userGuesses = [];
  compChoice();
  winsElement();
  lossesElement();
  guessesLeftElement();
  userGuessElement();
};

reset();

document.onkeypress = e => {
  userChoice = e.key.toLocaleLowerCase();
  if (!letters.includes(userChoice)) {
    showError('No special characters or numbers please. Try it again. ');
  } else if (userGuesses.includes(userChoice)) {
    showError('You can only pick the same letter once');
  } else {
    userGuesses.push(userChoice);
    guessLeft--;
    guessesLeftElement();
    userGuessElement();
  }

  if (randomLetter === userChoice) {
    wins++;
    alert('way to go dude u got it right');
    reset();
  } else if (guessLeft === 0) {
    losses++;
    alert('you suck dude try again or not! ');
    reset();
  }
};
