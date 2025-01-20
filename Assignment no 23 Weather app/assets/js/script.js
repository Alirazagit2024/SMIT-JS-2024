// Body Img/Video
const bg = document.body;

// Input & Search
const inputBox = document.querySelector("#city");
const searchBtn = document.querySelector("#search");

// Weather Card
const weatherCard = document.querySelector("#weathercard");
const loader = document.querySelector("#loader");

// Function to convert time to 12-hour format
function convertTo12HourFormat(time) {
  let date = new Date(time);
  let hour = date.getHours();
  let min = date.getMinutes();
  let amPm = hour >= 12 ? "PM" : "AM";
  if (hour > 12) hour -= 12;
  if (hour === 0) hour = 12;
  if (min < 10) min = "0" + min;
  return `${hour}:${min} ${amPm}`;
}

// Function to format date as "Thurs 14 Jan"
function formatDate(date) {
  const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  let d = new Date(date);
  let day = d.getDay();
  let dayOfMonth = d.getDate();
  let month = d.getMonth();
  
  return `${daysOfWeek[day]} ${dayOfMonth} ${monthNames[month]}`;
}

// Function to display weather card
async function checkWeather(city) {
  const apiKey = "ca6dc54ad4074f00b0a204948242105";
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  // Show loader before getting data
  loader.classList.remove("hidden");
  weatherCard.innerHTML = "";

  try {
    const response = await fetch(apiUrl);

    // If the response is ok, process the data
    if (response.ok) {
      const data = await response.json();
      const weather = data.current;
      const location = data.location;

      console.log(data);
      

      loader.classList.add("hidden");

      weatherCard.innerHTML = `
        <div class="text-center bg-white bg-opacity-20 border border-white backdrop-blur-lg shadow-lg p-4 rounded-3xl w-full max-w-sm sm:max-w-sm">
          <h2 class="font-extrabold text-2xl mb-3">
            <i class="fa-regular fa-clock"></i> 
            <span id="clock-time">${convertTo12HourFormat(location.localtime)}</span>
          </h2>
          <div class="flex justify-between items-center">
            <h2 class="font-extrabold text-xl"><i class="fa-solid fa-location-dot"></i> ${location.name}</h2>
            <h2 class="font-extrabold text-xl">
              <i class="fa-solid fa-calendar-days"></i> <span id="current-date">${formatDate(location.localtime)}</span>
            </h2>
          </div>
          <div class="flex justify-between items-center">
            <div class="h-40 w-40 object-fill">
              <img src="${weather.condition.icon}" style="filter: drop-shadow(0px 0px 15px #000000);" alt="${weather.condition.text}" class="w-44">
            </div>
            <div class="flex flex-col text-right">
              <p class="font-extrabold text-4xl">${Math.round(weather.temp_c)}<span>°C</span></p>
              <p id="description" class="font-bold  text-lg">${weather.condition.text}</p>
            </div>
          </div>
          <h2 class="font-extrabold text-2xl mb-2"><i class="fa-solid fa-globe"></i> ${location.country.toUpperCase()}</h2>
          <div class="flex flex-col">
            <div class="flex justify-between items-center mt-4">
              <div class="flex justify-center items-center gap-2 text-start">
                <div class="flex">
                  <i class="fa-solid fa-droplet text-4xl"></i>
                </div>
                <div class="flex flex-col">
                  <p class="font-extrabold text-xl">${weather.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
              <div class="flex justify-center items-center gap-2 text-end">
                <div class="flex">
                  <i class="fa-solid fa-wind text-4xl"></i>
                </div>
                <div class="flex flex-col">
                  <p class="font-extrabold text-xl">${weather.wind_kph} Kph</p>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
            <div class="flex justify-between items-center mt-4">
              <div class="flex justify-center items-center gap-2 text-start">
                <div class="flex">
                  <i class="fa-solid fa-temperature-three-quarters text-4xl"></i>
                </div>
                <div class="flex flex-col">
                  <p class="font-extrabold text-xl">${Math.round(weather.feelslike_c)}°C</p>
                  <p>Feels like</p>
                </div>
              </div>
              <div class="flex justify-center items-center gap-2 text-end">
                <div class="flex">
                  <i class="fa-solid fa-cloud text-4xl"></i>
                </div>
                <div class="flex flex-col">
                  <p class="font-extrabold text-xl">${data.current.cloud}%</p>
                  <p>Clouds</p>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    } else {
      loader.classList.add("hidden");
      weatherCard.innerHTML = `<div class="h-full w-full object-fill text-center mx-auto">
              <img src="/assets/images/404.png" style="filter: drop-shadow(3px 10px 17px #000000);" alt="Error" class="w-full mx-auto">
              <h2 class="font-extrabold text-4xl mt-2"><i class="fa-solid fa-location-dot"></i> City not found!!!</h2>
            </div>`
    }
  } catch (error) {
    loader.classList.add("hidden");
    alert("Error fetching weather data. Please try again later.");
  }
}

// Search Btn Click
searchBtn.addEventListener("click", () => {
  const city = inputBox.value.trim();
  if (city === "") {
    alert("Please enter a city name...");
    return;
  }
  document.getElementById("suggestions").classList.add("hidden");
  checkWeather(city);
  inputBox.value = "";
});

// Input click suggestions on
function showSuggestions() {
  document.getElementById("suggestions").classList.remove("hidden");
}

// Input click suggestions on & search
function selectCity(cityName) {
  inputBox.value = cityName;
  document.getElementById("suggestions").classList.add("hidden");
  checkWeather(cityName);
}

// Input Search click
inputBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const city = inputBox.value.trim();
    if (city === "") {
      alert("Please enter a city name...");
      return;
    }
    checkWeather(city);
    document.getElementById("suggestions").classList.add("hidden");
    inputBox.value = "";
  }
});

// Dropdown hide
document.addEventListener("click", function (event) {
  if (!event.target.closest(".search-container")) {
    document.getElementById("suggestions").classList.add("hidden");
  }
  inputBox.value = "";
});

// Default Weather
checkWeather("karachi");
