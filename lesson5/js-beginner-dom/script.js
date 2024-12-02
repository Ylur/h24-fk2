// Part 1: Variables & Math Operations

let num1 = 10; // Change this value
let num2 = 5;  // Change this value

// Perform operations
let sum = "Sum: " + (num1 + num2) + "<br>";
let difference = "Difference: " + (num1 - num2) + "<br>";
let product = "Product: " + (num1 * num2) + "<br>";
let division = "Division: " + (num1 / num2) + "<br>";
let remainder = "Remainder: " + (num1 % num2) + "<br>";

// Display results in the DOM
document.getElementById("results").innerHTML = sum + difference + product + division + remainder;

// Part 2: Conditionals

let comparison;

if (num1 > num2) {
    comparison = num1 + " is greater than " + num2 + "<br>";
} else if (num1 < num2) {
    comparison = num1 + " is less than " + num2 + "<br>";
} else {
    comparison = num1 + " is equal to " + num2 + "<br>";
}

// Append result to the DOM
document.getElementById("results").innerHTML += comparison;

// Part 3: Loops

let loopResult = "";

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        loopResult += i + " is even<br>";
    } else {
        loopResult += i + " is odd<br>";
    }
}

// Append loop result to the DOM
document.getElementById("results").innerHTML += loopResult;

// Part 4: Functions

function multiplyNumbers(a, b) {
    return a * b;
}

let multiplicationResult = "The product of " + num1 + " and " + num2 + " is: " + multiplyNumbers(num1, num2) + "<br>";

// Append result to the DOM
document.getElementById("results").innerHTML += multiplicationResult;



// Bonus: User Input

function addUserNumbers() {
    let userNum1 = parseInt(document.getElementById("userNum1").value);
    let userNum2 = parseInt(document.getElementById("userNum2").value);

    let userSum = "Sum of user numbers: " + (userNum1 + userNum2) + "<br>";

    // Display result in DOM
    document.getElementById("userResult").innerHTML = userSum;
}
