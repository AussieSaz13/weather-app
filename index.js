function displayTemperature(response) {
  let temperatureElement = document.querySelector("#current-temp");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = `${temperature}°C`;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#city-search");
  let cityElement = document.querySelector("#current-city");

  let apiKey = "d444940bb8f4fo93af13eebc95t43ef1";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInputElement.value}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let time = new Date();
let today = document.querySelector("#time");
let hours = time.getHours();
let minutes = time.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[time.getDay()];
today.innerHTML = `${day} ${hours}:${minutes}`;
