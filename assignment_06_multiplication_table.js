// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
//
// Write a JavaScript program that generates multiplication tables using loops
// and functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_06_multiplication_table.js
//
// -----------------------------------------------------------------------------
// PART A — Single Table
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Print the multiplication table for that number from 1 to 12.
//
// Expected output (if user enters 5):
//
//   Multiplication Table for 5:
//   5  x  1  =  5
//   5  x  2  =  10
//   5  x  3  =  15
//   ...
//   5  x  12 =  60
//
// -----------------------------------------------------------------------------
// PART B — Bonus: Tables from 1 to N
// -----------------------------------------------------------------------------
// - Ask the user to enter a number N.
// - Print the full multiplication table for every number from 1 to N.
// - Add a separator line (e.g. "---") between each table.
//
// Expected output (if user enters 3):
//
//   Multiplication Table for 1:
//   1  x  1  =  1
//   ...
//   1  x  12 =  12
//   ---------------------------
//   Multiplication Table for 2:
//   2  x  1  =  2
//   ...
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - N must be a positive integer. If the user enters an invalid value,
//   print an error message and stop.
// - Each part must be in its own function (see scaffold below).
// - Complete Part A before attempting Part B.


// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require("readline-sync");


// Part A — Single multiplication table
function singleTable() {
    const input = readlineSync.question("Enter a number: ").trim();

    // Validate the input
    if (!/^\d+$/.test(input)) {
        console.log("Error: Number must be a positive integer.");
        return false;
    }

    const number = Number(input);

    if (number <= 0) {
        console.log("Error: Number must be a positive integer.");
        return false;
    }

    console.log();
    console.log(`Multiplication Table for ${number}:`);

    // Generate the multiplication table from 1 to 12
    for (let i = 1; i <= 12; i++) {
        console.log(`${number}  x  ${i}  =  ${number * i}`);
    }

    return true;
}


// Part B — Multiplication tables from 1 to N
function tablesFromOneToN() {
    const input = readlineSync.question("Enter a number N: ").trim();

    // Validate the input
    if (!/^\d+$/.test(input)) {
        console.log("Error: N must be a positive integer.");
        return false;
    }

    const n = Number(input);

    if (n <= 0) {
        console.log("Error: N must be a positive integer.");
        return false;
    }

    console.log();

    // Generate tables from 1 to N
    for (let number = 1; number <= n; number++) {
        console.log(`Multiplication Table for ${number}:`);

        // Generate each table from 1 to 12
        for (let i = 1; i <= 12; i++) {
            console.log(`${number}  x  ${i}  =  ${number * i}`);
        }

        // Add a separator between tables
        if (number < n) {
            console.log("---------------------------");
        }
    }

    return true;
}


// Main function
function main() {
    // Complete Part A first
    const partACompleted = singleTable();

    // Stop if Part A receives invalid input
    if (!partACompleted) {
        return;
    }

    console.log();

    // Complete Part B after Part A
    const partBCompleted = tablesFromOneToN();

    // Stop if Part B receives invalid input
    if (!partBCompleted) {
        return;
    }
}


main();