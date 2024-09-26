// 1. Function to check if a number is prime
function isPrime(number) {
  // Should return true if the number is prime, otherwise false
}

// Unit test for isPrime
function testIsPrime() {
  console.assert(isPrime(2) === true, 'Test Case 1 Failed');
  console.assert(isPrime(4) === false, 'Test Case 2 Failed');
  console.assert(isPrime(17) === true, 'Test Case 3 Failed');
}

// 2. Function to reverse a string
function reverseString(str) {
  // Should return the reverse of the input string
}

// Unit test for reverseString
function testReverseString() {
  console.assert(reverseString("hello") === "olleh", 'Test Case 1 Failed');
  console.assert(reverseString("world") === "dlrow", 'Test Case 2 Failed');
  console.assert(reverseString("") === "", 'Test Case 3 Failed');
}

// 3. Function to find the largest number in an array
function findMax(arr) {
  // Should return the largest number in the array
}

// Unit test for findMax
function testFindMax() {
  console.assert(findMax([1, 2, 3, 4, 5]) === 5, 'Test Case 1 Failed');
  console.assert(findMax([10, -1, 0, 30]) === 30, 'Test Case 2 Failed');
  console.assert(findMax([-10, -5, -3]) === -3, 'Test Case 3 Failed');
}

// 4. Function to check if a word is a palindrome
function isPalindrome(word) {
  // Should return true if the word is a palindrome, otherwise false
}

// Unit test for isPalindrome
function testIsPalindrome() {
  console.assert(isPalindrome("racecar") === true, 'Test Case 1 Failed');
  console.assert(isPalindrome("hello") === false, 'Test Case 2 Failed');
  console.assert(isPalindrome("madam") === true, 'Test Case 3 Failed');
}

// 5. Function to sum all the numbers in an array
function sumArray(arr) {
  // Should return the sum of all numbers in the array
}

// Unit test for sumArray
function testSumArray() {
  console.assert(sumArray([1, 2, 3, 4]) === 10, 'Test Case 1 Failed');
  console.assert(sumArray([5, 10, 15]) === 30, 'Test Case 2 Failed');
  console.assert(sumArray([]) === 0, 'Test Case 3 Failed');
}

// 6. Function to count the number of vowels in a string
function countVowels(str) {
  // Should return the number of vowels in the input string (a, e, i, o, u)
}

// Unit test for countVowels
function testCountVowels() {
  console.assert(countVowels("hello") === 2, 'Test Case 1 Failed');
  console.assert(countVowels("world") === 1, 'Test Case 2 Failed');
  console.assert(countVowels("javascript") === 3, 'Test Case 3 Failed');
}

// 7. Function to find the factorial of a number
function factorial(n) {
  // Should return the factorial of the number n
}

// Unit test for factorial
function testFactorial() {
  console.assert(factorial(5) === 120, 'Test Case 1 Failed');
  console.assert(factorial(0) === 1, 'Test Case 2 Failed');
  console.assert(factorial(3) === 6, 'Test Case 3 Failed');
}

// 8. Function to merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
  // Should merge two sorted arrays and return a new sorted array
}

// Unit test for mergeSortedArrays
function testMergeSortedArrays() {
  console.assert(JSON.stringify(mergeSortedArrays([1, 3, 5], [2, 4, 6])) === JSON.stringify([1, 2, 3, 4, 5, 6]), 'Test Case 1 Failed');
  console.assert(JSON.stringify(mergeSortedArrays([0, 2, 4], [1, 3, 5])) === JSON.stringify([0, 1, 2, 3, 4, 5]), 'Test Case 2 Failed');
  console.assert(JSON.stringify(mergeSortedArrays([], [1, 2, 3])) === JSON.stringify([1, 2, 3]), 'Test Case 3 Failed');
}

// 9. Function to generate a random number between two values (inclusive)
function randomBetween(min, max) {
  // Should return a random number between min and max (inclusive)
}

// Unit test for randomBetween
function testRandomBetween() {
  const randomNum = randomBetween(1, 10);
  console.assert(randomNum >= 1 && randomNum <= 10, 'Test Case 1 Failed');
  const randomNum2 = randomBetween(100, 200);
  console.assert(randomNum2 >= 100 && randomNum2 <= 200, 'Test Case 2 Failed');
}

// 10. Function to remove duplicates from an array
function removeDuplicates(arr) {
  // Should return a new array with duplicates removed
}

// Unit test for removeDuplicates
function testRemoveDuplicates() {
  console.assert(JSON.stringify(removeDuplicates([1, 2, 2, 3])) === JSON.stringify([1, 2, 3]), 'Test Case 1 Failed');
  console.assert(JSON.stringify(removeDuplicates([1, 1, 1, 1])) === JSON.stringify([1]), 'Test Case 2 Failed');
  console.assert(JSON.stringify(removeDuplicates([4, 5, 6])) === JSON.stringify([4, 5, 6]), 'Test Case 3 Failed');
}

// Call the test functions to check if they work as expected
testIsPrime();
testReverseString();
testFindMax();
testIsPalindrome();
testSumArray();
testCountVowels();
testFactorial();
testMergeSortedArrays();
testRandomBetween();
testRemoveDuplicates();
