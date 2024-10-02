// Part 1: Arrays

// Create an array of fruits
let fruits = ["Apple", "Banana", "Cherry", "Orange"];

// Display the entire array in the DOM
document.getElementById("array-results").innerHTML = "<h2>Fruits Array:</h2>" + fruits.join(", ") + "<br><br>";

// Loop through the array and display each fruit
let fruitList = "<h3>List of Fruits:</h3>";
for (let i = 0; i < fruits.length; i++) {
    fruitList += fruits[i] + "<br>";
}

// Append the fruit list to the DOM
document.getElementById("array-results").innerHTML += fruitList;

// Add a new fruit to the array
fruits.push("Grape");

// Display the updated array
document.getElementById("array-results").innerHTML += "<br><h3>Updated Fruits Array:</h3>" + fruits.join(", ");


// Part 2: Objects

// Create an object representing a car
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    color: "Blue"
};

// Display the entire car object in the DOM
document.getElementById("object-results").innerHTML = `
    <h2>Car Object:</h2>
    Make: ${car.make} <br>
    Model: ${car.model} <br>
    Year: ${car.year} <br>
    Color: ${car.color} <br><br>
`;

// Modify the color property
car.color = "Red";

// Display the updated car object in the DOM
document.getElementById("object-results").innerHTML += `
    <h3>Updated Car Object:</h3>
    Make: ${car.make} <br>
    Model: ${car.model} <br>
    Year: ${car.year} <br>
    Color: ${car.color} <br><br>
`;

// Loop through the object properties and display each key-value pair
let carDetails = "<h3>Car Details (Key-Value Pairs):</h3>";
for (let key in car) {
    carDetails += `${key}: ${car[key]} <br>`;
}

// Append car details to the DOM
document.getElementById("object-results").innerHTML += carDetails;


// Part 3: Arrays of Objects

// Create an array of student objects
let students = [
    { name: "Alice", age: 20, grade: "A" },
    { name: "Bob", age: 22, grade: "B" },
    { name: "Charlie", age: 21, grade: "A-" }
];

// Display the entire array of objects in the DOM
let studentList = "<h2>Students:</h2>";
for (let i = 0; i < students.length; i++) {
    studentList += `Name: ${students[i].name}, Age: ${students[i].age}, Grade: ${students[i].grade} <br>`;
}

// Append student details to the DOM
document.getElementById("object-results").innerHTML += "<br>" + studentList;
