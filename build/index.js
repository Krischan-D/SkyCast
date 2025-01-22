import {renderWeather} from "./renderWeatherInfo.js"

const screenLoader = document.getElementById('screen-loader')   
const inputBar = document.getElementById('input-bar');
const cityInput = document.getElementById('input')
const inputHeader = document.getElementById('input-header')
const animateButton = document.getElementById('animate-button');
const cityForm = document.getElementById('city-form')
const dataContainer = document.getElementById('weather-data-container')
const dataTags = document.getElementById('data-container')
const vigbg = document.getElementById('weather-bg')

const API_KEY = '11d87017b9a70f28c44f4d36e8ef3cad'
let isFetching = true

const icons = {
    'Clouds': { icon: '☁️', videoPath: 'build/assets/videos/Cloudy.mp4' },
    'Clear': { icon: '☀️', videoPath: 'build/assets/videos/Clear Sky.mp4' },
    'Rain': { icon: '🌧️', videoPath: 'build/assets/videos/Rainy.mp4' },
    'Snow': { icon: '❄️', videoPath: 'build/assets/videos/Snowy.mp4' },
    'Thunderstorm': { icon: '⛈️', videoPath: 'build/assets/videos/Thunderstorm.mp4' },
    'Drizzle': { icon: '🌦️', videoPath: 'assets/videos/Drizzle.mp4' },
    'Mist': { icon: '🌫️', videoPath: 'build/assets/videos/Misty.mp4' },
    'Fog': { icon: '🌫️', videoPath: 'build/assets/videos/Foggy.mp4'},
    'Haze': { icon: '🌫️', videoPath: 'build/assets/videos/Hazy.mp4'},
    'Smoke': { icon: '💨', videoPath: 'build/assets/videos/Smoky.mp4' },
    'Dust': { icon: '🌪️', videoPath: 'build/assets/videos/Sandstorm.mp4' }, // Update with correct file name
    'Sand': { icon: '🌪️', videoPath: 'build/assets/videos/Sandstorm.mp4'},
    'Ash': { icon: '🌋', videoPath: 'build/assets/videos/Volcanic Ash.mp4' },
    'Squall': { icon: '🌬️', videoPath: 'build/assets/videos/Squall.mp4' },
    'Tornado': { icon: '🌪️', videoPath: 'build/assets/videos/Tornado.mp4' },
};
function getData (city){
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(response => {
        if(response.ok){
           return  response.json()
        }else{
            throw new Error('could fetchd data')
        }
    
    })

}

function toCelcius(kelvin){
    return (kelvin - 273.15).toFixed(2)
}

function getWeather(weatherData){

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
    console.log(countryCode)

   
  
    setTimeout(()=>{
        Promise.all([getCountryName(countryCode), getWeatherIcon(weatherStatus)])
    .then(([country, weatherIcon]) => {
        
        const weatherInfo = {
            city,
            country,
            weatherStatus,
            weatherDescription,
            temp: toCelcius(temp),
            feelsLike: toCelcius(feelsLike),
            low: toCelcius(low),
            high: toCelcius(high),
            humidity,
            wind,
            visibility,
            clouds,
            sunrise: new Date(sunrise * 1000).toLocaleTimeString(),
            sunset: new Date(sunset * 1000).toLocaleTimeString(),
            lastUpdated: new Date(lastUpdated * 1000).toLocaleTimeString(),
            weatherIcon,

        }
        console.log(weatherIcon.videoPath)
        const videoSource = document.getElementById('weather-bg');
        const videoElement = document.getElementById('bg-video');
        videoSource.src = weatherIcon.videoPath;
        videoElement.load();
    

        // Reload the video to apply the new source
        videoElement.load();
        setTimeout(()=>{
            renderWeather(weatherInfo)
        })
        screenLoader.style.display = 'none';
        
     })
    }, 2000)
 
    
}

function getWeatherIcon(weatherStatus) {
    return icons[weatherStatus] || icons.default;
  }



function getCountryName(countryCode){
    return fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
    .then(response => {
        if(response.ok){
          return response.json()

        }else{
            throw new Error('could fetchd data')
        }
    
    }).then(data =>data[0].name.common)
    
}





cityForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const cityName = cityInput.value
    dataContainer.style.display = 'flex'; // Make the container visible


    
    dataTags.innerHTML = ''
    inputBar.classList.add('move-to-top');
    inputHeader.classList.add('disappear')
   
    isFetching = true;
    screenLoader.style.display = 'flex';
   
    getData(cityName)
    .then((data)=>{
        return getWeather(data)
    })
  
    setTimeout(() => {  
      
        dataContainer.classList.add('animate-to-top'); // Trigger the animation
    }, 100)


    cityInput.value = ''
})




