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
    const minutes = Math.floor(seconds / 60);
    //Calculate remaining seconds
    const secs = seconds % 60;
    
    //Convert to strings with leading zeros if needed
    const minutesStr = String(minutes).padStart(2, '0');
    const secondsStr = String(secs).padStart(2, '0');

    return minutesStr + ':' + secondsStr;

}

// TODO: Implement a function that updates the timer display
function updateDisplay() {
    // TODO: set timerDisplay.textContent using formatTime(remainingSeconds)
    
    const formattedTime = formatTime(remainingSeconds);
    //Update the timer display
    timerDisplay.textContent = formattedTime;
}

// TODO: Implement startTimer so that it:
// prevents multiple timers running at once
// updates status message (e.g. "Focus time!")
// uses setInterval to count down every second
function startTimer() {
    //prevent multiple timers at once
    if (timerId !== null) {
        return; // Timer is already running
    }
    //Update status message
    statusMessage.textContent = 'Focus time!';
    //Set up interval to count down every second
    timerId = setInterval(function() {
        if (remainingSeconds > 0) {
            remainingSeconds -= 1;
            updateDisplay();
        } else {
            // Time is up, clear interval
            clearInterval(timerId);
            timerId = null;
            statusMessage.textContent = 'Time is up!';
        }
    }, 1000);
}

// TODO: Implement resetTimer so that it:
// stops the interval if running
// resets remainingSeconds to STUDY_DURATION_SECONDS
// updates the display and status message
function resetTimer() {
    //Stop the interval if running
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
    //Reset remainingSeconds
    remainingSeconds = STUDY_DURATION_SECONDS;
    //Update display and status message
    updateDisplay();
    statusMessage.textContent = 'Ready to start';
    
}

// Set up event listeners
startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

// Initialise display on page load
updateDisplay();
statusMessage.textContent = 'Ready to start';
