// code that prints the first 10 multiples of a number

const inputNumber = parseInt(prompt("Enter a number:"));
if (inputNumber <= 0) {
    alert("Error, please enter a positive number.");
}else {
    for (let i = 1; i <= 10; i++) {
        console.log(inputNumber * i);
    }
}