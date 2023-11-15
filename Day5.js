// a code that createa an array of numbers, uses map()to double each number and filters out even numbers

// Creates an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// using map method to double the numbers
const doubledNumbers = numbers.map(function(num){
    return num * 2;
});

// using filter method to output even numbers only
const evenNumbers = doubledNumbers.filter(function(num){
    return num % 2 === 0;
});

// using loop to print the resulting array
for (let i= 0; i < evenNumbers.length; i++){
    console.log(evenNumbers[i]);
};