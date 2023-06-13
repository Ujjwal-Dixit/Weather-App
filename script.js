const weatherForm = document.getElementById('weatherForm');
const cityInput = document.getElementById('cityInput');
const weatherCardContainer = document.getElementById('weatherCardContainer');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityInput.value;
  getWeatherData(city);
  cityInput.value = '';
});

async function getWeatherData(city) {
  const apiKey = '7772e57dd6279c675ca2d00a8ab4f217';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (response.ok) {
      displayWeatherData(data);
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.log(error);
    showError(error.message);
  }
};

function displayWeatherData(data) {
  const cityName = data.name;
  const countryName = data.sys.country;
  const temperature = Math.round(data.main.temp);
  const description = data.weather[0].description;
  const dayTime = getDayAndTime(data.timezone);
  const cloudIcon = data.weather[0].icon;
  const imageURL = `http://openweathermap.org/img/w/${cloudIcon}.png`;

  const weatherCard = document.createElement('div');
  weatherCard.classList.add('weather-card');
  weatherCard.innerHTML = `
    <div class="location">${cityName}, ${countryName}</div>
    <div class="time">${dayTime}</div>
    <div class="current-weather">
      <div class="temperature">${temperature}°C</div>
      <div class="cloud-icon"><img src="${imageURL}" alt="" srcset=""></div>
      <div class="description">${description}</div>
    </div>
  `;

  weatherCardContainer.innerHTML = '';
  weatherCardContainer.appendChild(weatherCard);
  weatherCardContainer.style.display = 'block';
};

// To get the day and time using timezone
const getDayAndTime = (timezone) => {
  const localTime = new Date().getTime();
  const localOffset = new Date().getTimezoneOffset() * 60000;
  const currentUtcTime = localOffset + localTime;
  const cityOffset = currentUtcTime + 1000 * timezone;
  const cityTime = new Date(cityOffset);

  const options = { weekday: 'long', hour: 'numeric', minute: 'numeric', hour12: true };
  const formattedTime = cityTime.toLocaleString('en-US', options);
  // return formattedTime;
  return formattedTime.replace(/(\w+)\s/, '$1, ');
};

function showError(message) {
  weatherCardContainer.style.display = 'none';
  weatherCardContainer.innerHTML = '';
  alert('Error: ' + message);
};