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
        console.log(res.data)
        const temp = res.data.main.temp;
        const hum = res.data.main.humidity;
        const status = res.data.weather[0];
        const statusId = res.data.weather[0].id;


        cityName.textContent = res.data.name;
        temperature.textContent = Math.floor(temp) + `°C`;
        humidity.textContent = hum + `%`;
        weather.textContent = status.main;

        warning.textContent = "";
        input.value = "";

        if (statusId >= 200 && statusId < 300) {
            photo.setAttribute('src', `./img/thunderstorm.png`)
        } else if (statusId >= 300 && statusId < 400) {
            photo.setAttribute('src', `./img/drizzle.png`)
        } else if (statusId >= 500 && statusId < 600) {
            photo.setAttribute('src', `./img/rain.png`)
        } else if (statusId >= 600 && statusId < 700) {
            photo.setAttribute('src', `./img/ice.png`)
        } else if (statusId >= 700 && statusId < 800) {
            photo.setAttribute('src', `./img/fog.png`)
        } else if (statusId === 800) {
            photo.setAttribute('src', `./img/sun.png`)
        } else if (statusId > 800 && statusId < 900) {
            photo.setAttribute('src', `./img/cloud.png`)
        } else {
            photo.setAttribute('src', `./img/unknown.png`)
        }

    }).catch(() => warning.textContent = "Wpisz poprawną nazwę miasta!")
};

const enterCheck = (e) => {
    if (e.key === 'Enter')
        getWeather()
}

input.addEventListener('keyup', enterCheck)
button.addEventListener('click', getWeather);
getWeather();