# Web Project - Study Session Timer (HTML, CSS, JavaScript)

## Overview

You will build a small Study Session Timer as a client-side web app using HTML, CSS, and JavaScript.

The focus is on:
- Basic DOM manipulation with JavaScript
- Simple timing logic using `setInterval`
- Teamwork on a small, realistic front-end feature

## Learning Goals

- Create and style a simple web page layout
- Respond to button clicks with JavaScript event listeners
- Update the DOM to show changing time and status

## Scenario

Students often use the Pomodoro technique: 25 minutes of focused study, followed by a 5-minute break. Your app will help manage one or more short study sessions.

## Features to Implement

The page should:

1. Let the user start a 25-minute study timer
2. Show a countdown (minutes and seconds) updating every second
3. When the study time ends, show a clear message (e.g. "Time for a break!")
4. Provide a reset button to stop and clear the timer

You do not need to handle multiple cycles or persistent settings, but you *may* extend the app if there is time.

## Files Provided

- `index.html` - basic page structure and elements
- `style.css` - minimal styling scaffold
- `script.js` - JavaScript file with TODOs for timer logic

## Suggested Team Task Split

- Person A: HTML structure and accessibility tweaks
- Person B: CSS styling and layout in `style.css`
- Person C: Implement timer start/stop logic in `script.js`
- Person D: DOM updates (displaying time, status messages)
- Person E (if present): Extra UX polish, edge-case testing, and refactoring

## Getting Started with Git

Run these commands once per team from this folder:

```bash
git init
git add .
git commit -m "Initial commit"
```
Ensure one of the team regularly commits to the repository. Use simple commits for now, unless you want to experiement with branch and merge. 

## What To Do

1. Open `index.html`, `style.css`, and `script.js`.
2. Read the comments and existing code.
3. Decide how to split the TODOs between team members.
4. Implement the timer logic and styling step by step.
5. Test in a browser and refine.

## Nice-to-Have Ideas (Optional)

If you finish the core requirements early, you may:

- Allow the user to change the study duration (input field)
- Add a simple sound or visual effect when the timer ends (e.g. change background colour)
- Show a progress bar indicating how much time is left
- Prevent multiple timers from running at once

## Running the Project

Simply open `index.html` in a web browser or use live server.

-

Focus on clear, readable code and meaningful variable/function names. Avoid advanced patterns - keep it simple and understandable for everyone on the team.
