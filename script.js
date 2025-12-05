// script.js
// Study Session Timer logic.
// You should complete the TODOs below.

// Get references to key DOM elements
const timerDisplay = document.getElementById('timer-display');
const statusMessage = document.getElementById('status-message');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');

// Duration in seconds for a 25-minute timer
const STUDY_DURATION_SECONDS = 25 * 60;

// This will hold the remaining seconds
let remainingSeconds = STUDY_DURATION_SECONDS;

// This will hold the interval ID returned by setInterval
let timerId = null;

// TODO: Implement a function to format seconds as MM:SS
function formatTime(seconds) {
    // Example: 1500 seconds -> "25:00"
    // TODO: calculate minutes and seconds and return a string
}

// TODO: Implement a function that updates the timer display
function updateDisplay() {
    // TODO: set timerDisplay.textContent using formatTime(remainingSeconds)
}

// TODO: Implement startTimer so that it:
// prevents multiple timers running at once
// updates status message (e.g. "Focus time!")
// uses setInterval to count down every second
function startTimer() {
    // TODO: implement timer start logic
}

// TODO: Implement resetTimer so that it:
// stops the interval if running
// resets remainingSeconds to STUDY_DURATION_SECONDS
// updates the display and status message
function resetTimer() {
    // TODO: implement timer reset logic
}

// Set up event listeners
startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

// Initialise display on page load
updateDisplay();
statusMessage.textContent = 'Ready to start';
