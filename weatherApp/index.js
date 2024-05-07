//Weather APP
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "ab081a3e79d7897f6a8a8adbfe1117f4";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityInput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter a city");
    } 
});

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }
    return await response.json();
}

function displayWeatherInfo(data){
    const {name: city, main: {temp, humidity}, weather: [{description, id}]} = data;

    // Clear existing content in the card
    card.innerHTML = "";

    // Create and populate elements with weather data
    const cityDisplay = document.createElement("h1");
    cityDisplay.textContent = city;
    cityDisplay.classList.add("cityDisplay");
    card.appendChild(cityDisplay);

    const tempDisplay = document.createElement("p");
    tempDisplay.textContent = `Temperature: ${Math.round(temp - 273.15)}°C`;
    tempDisplay.classList.add("tempDisplay");
    card.appendChild(tempDisplay);

    const humidityDisplay = document.createElement("p");
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    humidityDisplay.classList.add("humidityDisplay");
    card.appendChild(humidityDisplay);

    const descDisplay = document.createElement("p");
    descDisplay.textContent = `Description: ${description}`;
    descDisplay.classList.add("descDisplay");
    card.appendChild(descDisplay);

    const emojiDisplay = document.createElement("p");
    emojiDisplay.textContent = `Emoji: ${getWeatherEmoji(id)}`;
    emojiDisplay.classList.add("emojiDisplay");
    card.appendChild(emojiDisplay);

    card.style.display = "flex";
}

function getWeatherEmoji(weatherId) {
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️"; // Thunderstorm emoji
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️"; // Drizzle emoji
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️"; // Rain emoji
        case (weatherId >= 600 && weatherId < 700):
            return "❄️"; // Snow emoji
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️"; // Atmosphere emoji
        case (weatherId === 800):
            return "☀️"; // Clear sky emoji
        case (weatherId >= 801 && weatherId < 900):
            return "🌥️"; // Clouds emoji
        default:
            return "❓"; // Question mark for unknown weather
    }
}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.innerHTML = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}
