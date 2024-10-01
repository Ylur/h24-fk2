// Part 1: Variables & Math Operations

let num1 = 10; // Change this value
let num2 = 5;  // Change this value

// Perform operations
console.log("Sum: " + (num1 + num2));
console.log("Difference: " + (num1 - num2));
console.log("Product: " + (num1 * num2));
console.log("Division: " + (num1 / num2));
console.log("Remainder: " + (num1 % num2));

// Part 2: Conditionals

if (num1 > num2) {
    console.log(num1 + " is greater than " + num2);
} else if (num1 < num2) {
    console.log(num1 + " is less than " + num2);
} else {
    console.log(num1 + " is equal to " + num2);
}

// Part 3: Loops

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

// Part 4: Functions

function multiplyNumbers(a, b) {
    return a * b;
}

let result = multiplyNumbers(num1, num2);
console.log("The product of " + num1 + " and " + num2 + " is: " + result);

// Bonus: User Input

let userNum1 = parseInt(prompt("Enter the first number:"));
let userNum2 = parseInt(prompt("Enter the second number:"));

console.log("Sum of user numbers: " + (userNum1 + userNum2));
