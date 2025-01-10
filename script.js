const apiKey = "a8de6e22493e392a92ff2291ac7677e2";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let cityname = document.querySelector(".search input");
let btn = document.querySelector(".search button");
let icon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let viewdata = await response.json();
  // console.log(viewdata);
  document.querySelector(".city").innerHTML = viewdata.name;
  document.querySelector(".temp").innerHTML = `${Math.round(
    viewdata.main.temp
  )}°C`;
  document.querySelector(".humidity").innerHTML = `${viewdata.main.humidity}%`;
  document.querySelector(".wind").innerHTML = `${viewdata.wind.speed}km/hr`;
  console.log(viewdata);
  if (viewdata.weather[0].main == "Clouds") {
    icon.src = "images/clouds.png";
  } else if (viewdata.weather[0].main == "Clear") {
    icon.src = "images/clear.png";
  } else if (viewdata.weather[0].main == "Drizzle") {
    icon.src = "images/drizzle.png";
  } else if (viewdata.weather[0].main == "Mist") {
    icon.src = "images/mist.png";
  } else if (viewdata.weather[0].main == "Rain") {
    icon.src = "images/rain.png";
  } else if (viewdata.weather[0].main == "Snow") {
    icon.src = "images/snow.png";
  }
}

btn.addEventListener("click", () => {
  checkWeather(cityname.value);
});

//35.49