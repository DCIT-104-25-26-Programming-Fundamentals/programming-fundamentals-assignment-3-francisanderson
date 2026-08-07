// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// The Fibonacci sequence is a series of numbers where each number is the sum
// of the two numbers before it:
//
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Write a JavaScript program with TWO parts, each implemented as a function.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_05_fibonacci_sequence.js
//
// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
// - Ask the user how many terms (N) to display.
// - Print the first N numbers of the Fibonacci sequence on one line.
//
// Example:
//   How many terms? 7
//   Fibonacci sequence: 0 1 1 2 3 5 8
//
// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Determine whether that number is a Fibonacci number.
// - Print an appropriate message.
//
// Example:
//   Enter a number to check: 13
//   13 is a Fibonacci number.
//
//   Enter a number to check: 20
//   20 is NOT a Fibonacci number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use a loop (not recursion) to generate the sequence in both parts.
// - N must be a positive integer. If it is not, print an error message.
// - Each part must be implemented in its own function (see scaffold below).
//


//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require("readline-sync");


// Part A — Print the first N Fibonacci terms
function printFibonacciTerms() {
    while (true) {
        const input = readlineSync.question(
            "How many terms? "
        ).trim();

        // Allow the user to quit
        if (input.toLowerCase() === "q") {
            return false;
        }

        // Validate that N is a positive integer
        if (!/^\d+$/.test(input)) {
            console.log(
                "Error: N must be a positive integer."
            );
            continue;
        }

        const n = Number(input);

        if (n <= 0) {
            console.log(
                "Error: N must be a positive integer."
            );
            continue;
        }

        let first = 0;
        let second = 1;
        let sequence = "";

        // Generate the Fibonacci sequence using a loop
        for (let i = 0; i < n; i++) {
            sequence += first;

            if (i < n - 1) {
                sequence += " ";
            }

            const next = first + second;
            first = second;
            second = next;
        }

        console.log(`Fibonacci sequence: ${sequence}`);
        console.log();

        return true;
    }
}


// Part B — Check if a number belongs to the Fibonacci sequence
function checkFibonacciNumber() {
    while (true) {
        const input = readlineSync.question(
            "Enter a number to check: "
        ).trim();

        // Allow the user to quit
        if (input.toLowerCase() === "q") {
            return false;
        }

        // Validate the input as an integer
        if (!/^-?\d+$/.test(input)) {
            console.log(
                "Error: Please enter a valid whole number."
            );
            continue;
        }

        const number = Number(input);

        // Negative numbers are not Fibonacci numbers
        if (number < 0) {
            console.log(
                `${number} is NOT a Fibonacci number.`
            );
            console.log();
            return true;
        }

        let first = 0;
        let second = 1;
        let isFibonacci = false;

        // Generate Fibonacci numbers using a loop
        while (first <= number) {
            if (first === number) {
                isFibonacci = true;
                break;
            }

            const next = first + second;
            first = second;
            second = next;
        }

        if (isFibonacci) {
            console.log(`${number} is a Fibonacci number.`);
        } else {
            console.log(`${number} is NOT a Fibonacci number.`);
        }

        console.log();

        return true;
    }
}


// Main function
function main() {
    while (true) {
        console.log("=================================");
        console.log("     FIBONACCI SEQUENCE");
        console.log("=================================");
        console.log("1. Print the First N Terms");
        console.log("2. Check a Number");
        console.log("Q. Quit");
        console.log("=================================");

        const choice = readlineSync.question(
            "Choose an option: "
        ).trim().toLowerCase();

        if (choice === "q") {
            console.log("Program ended.");
            break;
        }

        if (choice === "1") {
            if (!printFibonacciTerms()) {
                console.log("Program ended.");
                break;
            }
        } else if (choice === "2") {
            if (!checkFibonacciNumber()) {
                console.log("Program ended.");
                break;
            }
        } else {
            console.log(
                "Error: Please choose 1, 2, or Q."
            );
            console.log();
        }
    }
}


main();