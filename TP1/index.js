const request = require("request");

const API_KEY = "38f9264b8e345e5059d64b5e08c19663";
const BASE_URL =
  "http://api.openweathermap.org/data/2.5/weather?" +
  "&units=metric&lang=fr&" +
  "appid=" +
  API_KEY +
  "&q=";

function getWeatherData(city, callback) {
  const url = BASE_URL + city;
  request(url, function (error, response, body) {
    if (error) {
      callback(error, null);
    } else {
      const weatherData = JSON.parse(body);
      callback(null, weatherData);
    }
  });
}

getWeatherData("Sousse", function (error, data) {
  if (error) {
    console.error("Error fetching weather data:", error);
  } else {
    console.log("Weather Description:", data.weather[0].description);
    console.log("Temperature:", data.main.temp + "°C");
    console.log("Humidity:", data.main.humidity + "%");
  }
});
