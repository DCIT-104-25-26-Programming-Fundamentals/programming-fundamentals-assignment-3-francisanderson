// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//


// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');


// Function to read a matrix from the user
function readMatrix(rows, columns, matrixName) {
    const matrix = [];

    for (let i = 0; i < rows; i++) {
        while (true) {
            const rowInput = readlineSync.question(
                `Enter row ${i + 1} of ${matrixName}: `
            ).trim();

            // Allow the user to quit
            if (rowInput.toLowerCase() === 'q') {
                return null;
            }

            const values = rowInput.split(/\s+/).map(Number);

            // Validate the number of values in the row
            if (values.length !== columns) {
                console.log(
                    `Error: Please enter exactly ${columns} numbers.`
                );
                continue;
            }

            // Validate that every value is a valid number
            let valid = true;

            for (let j = 0; j < values.length; j++) {
                if (Number.isNaN(values[j])) {
                    valid = false;
                    break;
                }
            }

            if (!valid) {
                console.log("Error: Please enter numbers only.");
                continue;
            }

            matrix.push(values);
            break;
        }
    }

    return matrix;
}


// Function to transpose a matrix
function transposeMatrix(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    const transposed = [];

    for (let i = 0; i < columns; i++) {
        transposed[i] = [];

        for (let j = 0; j < rows; j++) {
            transposed[i][j] = matrix[j][i];
        }
    }

    return transposed;
}


// Function to add two matrices
function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const columns = matrixA[0].length;
    const result = [];

    for (let i = 0; i < rows; i++) {
        result[i] = [];

        for (let j = 0; j < columns; j++) {
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }

    return result;
}


// Function to multiply two matrices
function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const columnsA = matrixA[0].length;
    const columnsB = matrixB[0].length;
    const result = [];

    for (let i = 0; i < rowsA; i++) {
        result[i] = [];

        for (let j = 0; j < columnsB; j++) {
            result[i][j] = 0;

            for (let k = 0; k < columnsA; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return result;
}


// Function to display a matrix
function displayMatrix(matrix) {
    if (matrix === null || matrix.length === 0) {
        return;
    }

    // Find the largest number width for aligned formatting
    let maxWidth = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const width = String(matrix[i][j]).length;

            if (width > maxWidth) {
                maxWidth = width;
            }
        }
    }

    // Display the matrix using nested loops
    for (let i = 0; i < matrix.length; i++) {
        let row = "";

        for (let j = 0; j < matrix[i].length; j++) {
            row += String(matrix[i][j]).padStart(maxWidth + 2);
        }

        console.log(row);
    }
}


// Function to get a positive integer
function getPositiveInteger(prompt) {
    while (true) {
        const input = readlineSync.question(prompt).trim();

        if (input.toLowerCase() === 'q') {
            return null;
        }

        if (!/^\d+$/.test(input)) {
            console.log("Error: Please enter a positive integer or Q to quit.");
            continue;
        }

        const number = Number(input);

        if (number <= 0) {
            console.log("Error: Number must be greater than 0.");
            continue;
        }

        return number;
    }
}


// Part A: Transpose a matrix
function performTranspose() {
    console.log();
    console.log("PART A — Transpose a Matrix");

    const rows = getPositiveInteger("Enter number of rows: ");

    if (rows === null) {
        return false;
    }

    const columns = getPositiveInteger("Enter number of columns: ");

    if (columns === null) {
        return false;
    }

    const matrix = readMatrix(rows, columns, "matrix");

    if (matrix === null) {
        return false;
    }

    const transposed = transposeMatrix(matrix);

    console.log();
    console.log("Original Matrix:");
    displayMatrix(matrix);

    console.log();
    console.log("Transposed Matrix:");
    displayMatrix(transposed);

    return true;
}


// Part B: Add two matrices
function performAddition() {
    console.log();
    console.log("PART B — Add Two Matrices");

    const rows = getPositiveInteger("Enter number of rows: ");

    if (rows === null) {
        return false;
    }

    const columns = getPositiveInteger("Enter number of columns: ");

    if (columns === null) {
        return false;
    }

    console.log();
    console.log("Enter Matrix A:");

    const matrixA = readMatrix(rows, columns, "Matrix A");

    if (matrixA === null) {
        return false;
    }

    console.log();
    console.log("Enter Matrix B:");

    const matrixB = readMatrix(rows, columns, "Matrix B");

    if (matrixB === null) {
        return false;
    }

    const result = addMatrices(matrixA, matrixB);

    console.log();
    console.log("Matrix A:");
    displayMatrix(matrixA);

    console.log();
    console.log("Matrix B:");
    displayMatrix(matrixB);

    console.log();
    console.log("Result:");
    displayMatrix(result);

    return true;
}


// Part C: Multiply two matrices
function performMultiplication() {
    console.log();
    console.log("PART C — Multiply Two Matrices");

    const rowsA = getPositiveInteger("Enter number of rows for Matrix A: ");

    if (rowsA === null) {
        return false;
    }

    const columnsA = getPositiveInteger(
        "Enter number of columns for Matrix A: "
    );

    if (columnsA === null) {
        return false;
    }

    console.log();
    console.log("Matrix B must have");
    console.log(`${columnsA} rows because columns of A must equal rows of B.`);

    const rowsB = getPositiveInteger("Enter number of rows for Matrix B: ");

    if (rowsB === null) {
        return false;
    }

    // Validate matrix multiplication dimensions
    if (rowsB !== columnsA) {
        console.log(
            "Error: The number of rows in Matrix B must equal the " +
            "number of columns in Matrix A."
        );
        return true;
    }

    const columnsB = getPositiveInteger(
        "Enter number of columns for Matrix B: "
    );

    if (columnsB === null) {
        return false;
    }

    console.log();
    console.log("Enter Matrix A:");

    const matrixA = readMatrix(rowsA, columnsA, "Matrix A");

    if (matrixA === null) {
        return false;
    }

    console.log();
    console.log("Enter Matrix B:");

    const matrixB = readMatrix(rowsB, columnsB, "Matrix B");

    if (matrixB === null) {
        return false;
    }

    const result = multiplyMatrices(matrixA, matrixB);

    console.log();
    console.log("Matrix A:");
    displayMatrix(matrixA);

    console.log();
    console.log("Matrix B:");
    displayMatrix(matrixB);

    console.log();
    console.log("Result (A x B):");
    displayMatrix(result);

    return true;
}


// Main function
function main() {
    while (true) {
        console.log();
        console.log("=================================");
        console.log("       MATRIX OPERATIONS");
        console.log("=================================");
        console.log("1. Transpose a Matrix");
        console.log("2. Add Two Matrices");
        console.log("3. Multiply Two Matrices");
        console.log("Q. Quit");
        console.log("=================================");

        const choice = readlineSync.question("Choose an option: ")
            .trim()
            .toLowerCase();

        if (choice === "q") {
            console.log("Program ended.");
            break;
        }

        if (choice === "1") {
            if (!performTranspose()) {
                console.log("Program ended.");
                break;
            }
        } else if (choice === "2") {
            if (!performAddition()) {
                console.log("Program ended.");
                break;
            }
        } else if (choice === "3") {
            if (!performMultiplication()) {
                console.log("Program ended.");
                break;
            }
        } else {
            console.log("Error: Please choose 1, 2, 3, or Q.");
        }
    }
}


main();