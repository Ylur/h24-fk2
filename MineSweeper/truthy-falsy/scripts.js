// Falsy values in JavaScript
const falsyValues = [false, 0, '', null, undefined, NaN];
console.log("Falsy values:");
falsyValues.forEach(value => {
  if (value) {
    console.log(value, "is truthy");
  } else {
    console.log(value, "is falsy");
  }
});

// Truthy values in JavaScript
const truthyValues = [true, 1, 'non-empty string', [], {}, -1, Infinity];
console.log("\nTruthy values:");
truthyValues.forEach(value => {
  if (value) {
    console.log(value, "is truthy");
  } else {
    console.log(value, "is falsy");
  }
});
