// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
//
// Build a console-based program that stores and manages student information.
// Each student is represented as a JavaScript object containing:
//
//   - name   : the student's full name  (string)
//   - id     : a unique student ID number (number, e.g. 20240001)
//   - scores : an array of scores from multiple assessments (e.g. [75, 88, 90])
//
// Example object:
//   { name: "Alice Mensah", id: 20240001, scores: [78, 85, 90] }
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_08_student_records.js
//
// -----------------------------------------------------------------------------
// FEATURES YOUR PROGRAM MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Add a Student
//      - Ask the user to enter the student's name and ID.
//      - Ask how many scores to enter, then collect each score one by one.
//      - Save the student object and confirm it was added.
//
//   2. Display All Students
//      - Print a formatted table showing every student's:
//          Name, ID, individual scores, and their average score.
//      - If no students have been added yet, print a message saying so.
//
//   3. Calculate Average Score for a Specific Student
//      - Ask the user to enter a student ID.
//      - Find the student and print their average score.
//      - If the ID is not found, print an error message.
//
//   4. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ================================
//      STUDENT RECORD SYSTEM MENU
//   ================================
//   1. Add student
//   2. Display all students
//   3. Calculate average score
//   4. Quit
//   Enter your choice (1-4):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Enter your choice (1-4): 1
//   Student name: Alice Mensah
//   Student ID: 20240001
//   How many scores? 3
//   Enter score 1: 78
//   Enter score 2: 85
//   Enter score 3: 90
//   Student "Alice Mensah" added successfully.
//
//   Enter your choice (1-4): 3
//   Enter student ID: 20240001
//   Alice Mensah's average score: 84.33
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Store all student records in an array of objects.
// - Average scores must be displayed to 2 decimal places (use .toFixed(2)).
// - Each feature MUST be in its own function (see scaffold below).
// - Handle invalid menu choices and missing student IDs gracefully.
//


// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require("readline-sync");


// Store all student records in an array of objects
let students = [];


// Function to calculate the average score
function calculateAverage(scores) {
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    return total / scores.length;
}


// Function to add a student
function addStudent() {
    let name;

    // Get a valid student name
    while (true) {
        name = readlineSync.question("Student name: ").trim();

        if (name === "") {
            console.log("Error: Student name cannot be empty.");
        } else {
            break;
        }
    }

    let id;

    // Get a valid and unique student ID
    while (true) {
        const idInput = readlineSync.question("Student ID: ").trim();

        if (!/^\d+$/.test(idInput)) {
            console.log("Error: Student ID must be a number.");
            continue;
        }

        id = Number(idInput);

        let idExists = false;

        for (let i = 0; i < students.length; i++) {
            if (students[i].id === id) {
                idExists = true;
                break;
            }
        }

        if (idExists) {
            console.log("Error: This student ID already exists.");
        } else {
            break;
        }
    }

    let numberOfScores;

    // Get a valid number of scores
    while (true) {
        const countInput = readlineSync.question(
            "How many scores? "
        ).trim();

        if (!/^\d+$/.test(countInput)) {
            console.log("Error: Please enter a valid positive integer.");
            continue;
        }

        numberOfScores = Number(countInput);

        if (numberOfScores <= 0) {
            console.log("Error: Number of scores must be greater than 0.");
        } else {
            break;
        }
    }

    const scores = [];

    // Collect each score
    for (let i = 0; i < numberOfScores; i++) {
        while (true) {
            const scoreInput = readlineSync.question(
                `Enter score ${i + 1}: `
            ).trim();

            if (!/^\d+(\.\d+)?$/.test(scoreInput)) {
                console.log("Error: Please enter a valid score.");
                continue;
            }

            const score = Number(scoreInput);

            if (score < 0 || score > 100) {
                console.log("Error: Score must be between 0 and 100.");
                continue;
            }

            scores.push(score);
            break;
        }
    }

    // Create the student object
    const student = {
        name: name,
        id: id,
        scores: scores
    };

    // Store the student
    students.push(student);

    console.log(`Student "${name}" added successfully.`);
}


// Function to display all students
function displayAllStudents() {
    if (students.length === 0) {
        console.log("No students have been added yet.");
        return;
    }

    console.log();
    console.log("Student Records:");
    console.log("------------------------------------------------------------");

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const average = calculateAverage(student.scores);

        console.log(`Name: ${student.name}`);
        console.log(`ID: ${student.id}`);
        console.log(`Scores: ${student.scores.join(", ")}`);
        console.log(`Average: ${average.toFixed(2)}`);
        console.log("------------------------------------------------------------");
    }
}


// Function to calculate average score for a specific student
function calculateStudentAverage() {
    if (students.length === 0) {
        console.log("No students have been added yet.");
        return;
    }

    const idInput = readlineSync.question(
        "Enter student ID: "
    ).trim();

    if (!/^\d+$/.test(idInput)) {
        console.log("Error: Please enter a valid student ID.");
        return;
    }

    const id = Number(idInput);
    let studentFound = null;

    // Search for the student
    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            studentFound = students[i];
            break;
        }
    }

    // Handle missing student ID
    if (studentFound === null) {
        console.log("Error: Student ID not found.");
        return;
    }

    const average = calculateAverage(studentFound.scores);

    console.log(
        `${studentFound.name}'s average score: ${average.toFixed(2)}`
    );
}


// Function to display the menu
function displayMenu() {
    console.log();
    console.log("================================");
    console.log("    STUDENT RECORD SYSTEM MENU");
    console.log("================================");
    console.log("1. Add student");
    console.log("2. Display all students");
    console.log("3. Calculate average score");
    console.log("4. Quit");
}


// Main function
function main() {
    while (true) {
        displayMenu();

        const choice = readlineSync.question(
            "Enter your choice (1-4): "
        ).trim();

        if (choice === "1") {
            addStudent();
        } else if (choice === "2") {
            displayAllStudents();
        } else if (choice === "3") {
            calculateStudentAverage();
        } else if (choice === "4") {
            console.log("Goodbye!");
            break;
        } else {
            console.log("Error: Please choose an option from 1 to 4.");
        }
    }
}


// Start the program
main();