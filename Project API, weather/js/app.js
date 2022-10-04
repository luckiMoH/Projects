const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')


const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=4289b734857285ca3b3aec61c220d13b';
const API_UNITS = '&units=metric';

const getWeather = () => {
    const city = input.value || "London";
    const URL = API_LINK + city + API_KEY + API_UNITS;

    axios.get(URL).then(res => {
        console.log(res.data.main)
        const temp = res.data.main.temp;
        const hum = res.data.main.humidity;

        cityName.textContent = res.data.name;

        temperature.textContent = Math.floor(temp) + `°C`
        humidity.textContent = hum + `%`

    })
};

getWeather();