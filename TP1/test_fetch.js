const API_KEY = "38f9264b8e345e5059d64b5e08c19663";
const BASE_URL =
  "http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&q=";

async function getWeatherData(city) {
  const url = BASE_URL + city + "&units=metric&lang=fr";
  try {
    const response = await fetch(url);
    const weatherData = await response.json();
    console.log("Weather Description:", weatherData.weather[0].description);
    console.log("Temperature:", weatherData.main.temp + "°C");
    console.log("Humidity:", weatherData.main.humidity + "%");
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

getWeatherData("Sousse");
