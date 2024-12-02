// Basic type annotations
const username: string = "Alice";
const age: number = 30;
const isStudent: boolean = false;

console.log(`Name: ${username}, Age: ${age}, Is Student: ${isStudent}`);

// Array and Tuple types
const scores: number[] = [85, 90, 78];
const person: [string, number] = ["Bob", 25];

console.log(`Scores: ${scores}, Person: ${person}`);

// Enum types
enum Color {
    Red,
    Green,
    Blue
}

const favoriteColor: Color = Color.Green;
console.log(`Favorite Color: ${favoriteColor}`);

// Function with type annotations
function getLengthOfString(foo: string): number {
    return foo.length
}

// stringLength is implicitly typed as a number
// because the return type of getLengthOfString is a number
const stringLength = getLengthOfString("Hello, World!");
console.log(typeof stringLength)

// new type
type Car = {
    make: string;
    model: string;
    year: number;
}

type Truck = Car & {
    towingCapacity: number;
}

const myCar: Car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};

const myTruck: Truck = {
    make: "Ford",
    model: "F-150",
    year: 2021,
    towingCapacity: 10000
};

console.log(`Car: ${myCar.make} ${myCar.model} (${myCar.year})`);


