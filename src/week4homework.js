function displayWeather(response) {
  let weatherElement = document.querySelector("#celcious");

  let temperature = Math.round(response.data.temperature.current);

  let citySearch = document.querySelector("#mainCity");
  weatherElement.innerHTML = temperature;
  citySearch.innerHTML = response.data.city;
}

function search(event) {
  event.preventDefault();
  let searchElement = document.querySelector("#search-for-city");
  let city = searchElement.value;
  let key = "57t510363ca64d76cf8d437ao0eea1eb";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&unit=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function projectDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let main = document.querySelector("#realTime");
  realTime.innerHTML = `${day} ${hours}:${minutes}`;

  return `${day} ${hours}:${minutes}`;
}

let newTime = document.querySelector("#realTime");
let currentDate = new Date();
newTime.innerHTML = projectDate(currentDate);

let formCity = document.querySelector("#form-city");
formCity.addEventListener("submit", search);
