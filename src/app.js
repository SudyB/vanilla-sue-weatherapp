const apiKey = "e643dd0a18e5a5dda974b966e4e9caa6";
const apiEndPoint = "https://api.openweathermap.org/data/2.5/weather?";
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let units = "metric";
let cityName = "";
let wind = 0;
let humidity = 0;
let temperature = 0;
let weatherIcon = "";
let weatherDescription = "";
let backgroundUrl = "";
let forecastTemperatures = [];

showDateAndTime();
getCurrentPosition();
setEventListeners();

function setEventListeners() {
  document.getElementById("location").addEventListener("click", searchPosition);
  document.getElementById("citysearch").addEventListener("submit", newcity);
  document
    .getElementById("farenheit")
    .addEventListener("click", changeFarenheit);
  document.getElementById("celcius").addEventListener("click", changeCelcius);
  setUpdateTimer();
}
