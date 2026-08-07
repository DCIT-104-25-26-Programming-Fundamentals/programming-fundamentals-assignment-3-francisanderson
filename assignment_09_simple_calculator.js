// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//


//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require("readline-sync");


// Function for addition
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}


// Function for subtraction
function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}


// Function for multiplication
function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}


// Function for division
function divide(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        return null;
    }

    return firstNumber / secondNumber;
}


// Function for modulus
function modulus(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        return null;
    }

    return firstNumber % secondNumber;
}


// Function for exponentiation
function exponentiate(firstNumber, secondNumber) {
    return firstNumber ** secondNumber;
}


// Function to get a valid number
function getNumber(prompt) {
    while (true) {
        const input = readlineSync.question(prompt).trim();

        const number = Number(input);

        if (input !== "" && !Number.isNaN(number)) {
            return number;
        }

        console.log("Error: Please enter a valid number.");
    }
}


// Function to display the calculator menu
function displayMenu() {
    console.log();
    console.log("============================");
    console.log("      SIMPLE CALCULATOR");
    console.log("============================");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulus");
    console.log("6. Exponentiation");
    console.log("7. Quit");
}


// Main function
function main() {
    while (true) {
        displayMenu();

        const choice = readlineSync.question(
            "Select an operation (1-7): "
        ).trim();

        // Quit
        if (choice === "7") {
            console.log("Goodbye!");
            break;
        }

        // Validate menu choice
        if (!["1", "2", "3", "4", "5", "6"].includes(choice)) {
            console.log("Error: Please select an option from 1 to 7.");
            continue;
        }

        // Get the two numbers
        const firstNumber = getNumber("Enter first number : ");
        const secondNumber = getNumber("Enter second number: ");

        let result;
        let operator;

        // Perform the selected operation
        if (choice === "1") {
            result = add(firstNumber, secondNumber);
            operator = "+";
        } else if (choice === "2") {
            result = subtract(firstNumber, secondNumber);
            operator = "-";
        } else if (choice === "3") {
            result = multiply(firstNumber, secondNumber);
            operator = "*";
        } else if (choice === "4") {
            result = divide(firstNumber, secondNumber);
            operator = "/";
        } else if (choice === "5") {
            result = modulus(firstNumber, secondNumber);
            operator = "%";
        } else if (choice === "6") {
            result = exponentiate(firstNumber, secondNumber);
            operator = "**";
        }

        // Handle division or modulus by zero
        if (result === null) {
            if (choice === "4") {
                console.log("Error: Cannot divide by zero.");
            } else {
                console.log("Error: Cannot calculate modulus by zero.");
            }

            continue;
        }

        // Display the result to 2 decimal places
        console.log(
            `Result: ${firstNumber} ${operator} ${secondNumber} = ${result.toFixed(2)}`
        );
    }
}


// Start the program
main();