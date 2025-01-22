const screenLoader = document.getElementById('screen-loader');
const inputBar = document.getElementById('input-bar');
const cityInput = document.getElementById('input');
const inputHeader = document.getElementById('input-header');
const cityForm = document.getElementById('city-form');
const dataContainer = document.getElementById('weather-data-container');
const dataTags = document.getElementById('data-container');

const API_KEY = '11d87017b9a70f28c44f4d36e8ef3cad';
let isFetching = true;

const weatherIcons = {
  Clouds: '☁️',
  Clear: '☀️',
  Rain: '🌧️',
  Thunderstorm: '⛈️',
  Snow: '❄️',
  default: '❓',
};

// Fetch weather data from OpenWeatherMap API
function fetchWeatherData(city) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Could not fetch weather data');
      }
      return response.json();
    });
}

// Convert Kelvin to Celsius
function toCelsius(kelvin) {
  return (kelvin - 273.15).toFixed(2);
}

// Fetch country name using country code
function fetchCountryName(countryCode) {
  return fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Could not fetch country data');
      }
      return response.json();
    })
    .then((data) => data[0].name.common);
}

// Get weather icon based on weather status
function getWeatherIcon(weatherStatus) {
  return weatherIcons[weatherStatus] || weatherIcons.default;
}

// Process weather data and render it
function processAndRenderWeather(weatherData) {
  const {
    name: city,
    sys: { country: countryCode, sunrise, sunset },
    weather: [{ main: weatherStatus, description: weatherDescription }],
    main: { temp, feels_like: feelsLike, temp_min: low, temp_max: high, humidity },
    wind: { speed: wind },
    visibility,
    clouds: { all: clouds },
    dt: lastUpdated,
  } = weatherData;

  Promise.all([fetchCountryName(countryCode), getWeatherIcon(weatherStatus)])
    .then(([country, weatherIcon]) => {
      const weatherInfo = {
        city,
        country,
        weatherStatus,
        weatherDescription,
        temp: toCelsius(temp),
        feelsLike: toCelsius(feelsLike),
        low: toCelsius(low),
        high: toCelsius(high),
        humidity,
        wind,
        visibility,
        clouds,
        sunrise: new Date(sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(sunset * 1000).toLocaleTimeString(),
        lastUpdated: new Date(lastUpdated * 1000).toLocaleTimeString(),
        weatherIcon,
      };

      renderWeather(weatherInfo);
      screenLoader.style.display = 'none';
    })
    .catch((error) => {
      console.error('Error processing weather data:', error);
      screenLoader.style.display = 'none';
    });
}

// Render weather data to the DOM
function renderWeather(weatherData) {
  console.log('Rendering weather data:', weatherData);
  // Add your rendering logic here
}

// Handle form submission
cityForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const cityName = cityInput.value.trim();

  if (!cityName) {
    alert('Please enter a city name');
    return;
  }

  isFetching = true;
  screenLoader.style.display = 'flex';

  fetchWeatherData(cityName)
    .then((data) => {
      processAndRenderWeather(data);
    })
    .catch((error) => {
      console.error('Error fetching weather data:', error);
      screenLoader.style.display = 'none';
      alert('Failed to fetch weather data. Please try again.');
    });

  inputBar.classList.add('move-to-top');
  inputHeader.classList.add('disappear');

  setTimeout(() => {
    dataContainer.style.display = 'flex';
    dataContainer.classList.add('animate-to-top');
  }, 100);
});