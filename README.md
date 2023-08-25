# The Odin Project: Calculator Project

Building an on-screen calculator using JavaScript, HTML, and CSS

**Course reference pages:** \
[Project: Calculator](https://www.theodinproject.com/lessons/foundations-calculator)

## Thoughts
- As always, do not try to write 'perfect' code. Get the program working first and then thinking about refactoring and optimising!
- Sometimes (or many times) I will spend hours trying out different solutions for a specific problem, adding and deleting code, only for the solution to be one line of code; but remember, I would not have come to this solution without the hours of struggle and once I reach the solution, I will understand it better.
- I made extensive use of console.log() to check that the values of variables are what I expected at certain points when the code is executed: I can't even begin to imagine how frustrating this project would have been if I had not made use of console.log() as liberally as I did.
- The Code is very messy but I am glad I was able to get all the functionalities working as intended.
- By continuously testing manually, I was able to identify edge case scenarios that would make the finished product appear incomplete and unprofessional: consecutive operators, multiple decimal points, pressing equals button when nothing present or following an operator etc

## Learnings
- Using *grid-column: span 2* to make element take up 2 column spaces
- How to remove last character from string
- Classes can be assigned to multiple elements, ID is specific to a single element
- document.getElementsByClassName returns an *array* of elements
- Remember to iterate through array to apply an attribute to all or specific elements

## Recapping
- Use of switch statements
- Using for loop to add similar eventlistener to buttons
- Using console.log() to check values of variables at different points when code is executed
- Multiple values cannot be returned from a function in JavaScript: when using switch case

## WIP
- Disabling keyboard input like disabling buttons

## Steps
1. Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators, so start by creating functions for the following items and testing them in your browser’s console.
- add
- subtract
- multiply
- divide
2. A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables for each of the parts of a calculator operation. Create a variable for the first number, the operator, and the second number. You’ll use these variables to update your display later.
3. Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
4. Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
- Do not worry about wiring up the JS just yet.
- There should also be a display for the calculator. - Go ahead and fill it with some dummy numbers so it looks correct.
- Add a “clear” button.
5. Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.
6. Make the calculator work! You’ll need to store the first number and second number that are input into the calculator, utilize the operator that the user selects, and then operate() on the two numbers when the user presses the “=” key.
- You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
- This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.
7. Gotchas: watch out for and fix these bugs if they show up in your code:
- Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking for would be this student solution.
- Your calculator should not evaluate more than a single pair of numbers at a time. Example: you press a number button (12), followed by an operator button (+), a second number button (7), and finally a second operator button (-). Your calculator should then do the following: first, evaluate the first pair of numbers (12 + 7), second, display the result of that calculation (19), and finally, use that result (19) as the first number in your new calculation, along with the next operator (-).
- You should round answers with long decimals so that they don’t overflow the screen.
- Pressing = before entering all of the numbers or an operator could cause problems!
- Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
- Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!

**Bonus challenges:**
1. Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)
2. Make it look nice! This is a great project to practice your CSS skills. At least make the operations a different color from the keypad buttons.
3. Add a “backspace” button, so the user can undo if they click the wrong number.
4. Add keyboard support! You might run into an issue where keys such as (/) might cause you some trouble. Read the MDN documentation for event.preventDefault to help solve this problem.
