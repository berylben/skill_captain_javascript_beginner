// A function taht converts  celcius to fahrenheit

const temperature = parseFloat(prompt("Enter temperature in degrees celcius:"));

function celciusToFahrenheit(){
    const newTemp = (temperature * 9/5) + 32;
    console.log(newTemp);
}
celciusToFahrenheit();