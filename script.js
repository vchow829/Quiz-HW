var startButton = document.querySelector(".start-button");
var startQuizText = document.querySelector(".startQuiz")
var question1El = document.querySelector(".question1");
var hideQuestion = document.querySelector(".questiontext")
var correct = document.querySelector(".win");
var incorrect = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");




startButton.addEventListener("click", function() {
  if (hideQuestion.style.display, question1El.style.display === "none") {
    hideQuestion.style.display, question1El.style.display = "block";
  } else {
    hideQuestion.style.display, question1El.style.display = "none";
  }
  timeLeft = 10

  function startQuiz() {
    var timeInterval = setInterval(function () {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft >=0) {
    }
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      displayMessage ();
    }
    }, 1000);
};


function displayMessage() {
  timerElement.textContent = "Your time has run out";
}




startButton.addEventListener("click", timerElement);




// Updates win count on screen and sets win count to client storage
function correct() {
  win.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}

// Updates lose count on screen and sets lose count to client storage
function incorrect() {
  lose.textContent = loseCounter;
  localStorage.setItem("loseCount", loseCounter);
}

// These functions are used by init
function getWins() {
  // Get stored value from client storage, if it exists
  var storedWins = localStorage.getItem("winCount");
  // If stored value doesn't exist, set counter to 0
  if (storedWins === null) {
    winCounter = 0;
  } else {
    // If a value is retrieved from client storage set the winCounter to that value
    winCounter = storedWins;
  }
  //Render win count to page
  win.textContent = winCounter;
}

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}
// Attaches event listener to button
resetButton.addEventListener("click", resetGame);
});