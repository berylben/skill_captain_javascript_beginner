// a code that displays weather of a certain city using api
function fetchWeather(Nairobi) {
    const apiKey = ``;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${Nairobi}&appid=${apiKey}`;


fetch(apiUrl)
.then(response => response.json())
.then(data => {
    const temperature = data.main.temp;
    const conditions = data.weather[0].description;

    console.log("Temperature in ${Nairobi}:")

});
}