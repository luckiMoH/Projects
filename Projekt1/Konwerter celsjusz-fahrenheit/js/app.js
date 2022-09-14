const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convertBtn = document.querySelector('.conv');
const reset = document.querySelector('.reset');
const change = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

let fahrenheit;
let celsius;

const swap = () => {
    if (one.textContent === '°C') {
        one.textContent = '°F';
        two.textContent = '°C';
        result.textContent = '';
    } else {
        one.textContent = '°C';
        two.textContent = '°F';
        result.textContent = '';
    }
}



const fahrToCel = () => {
    const fahrenheit = converter.value * 1.8 + 32;
    result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`;
    converter.value = '';
}
const celToFahr = () => {
    const celsius = (converter.value - 32) / 1.8;
    result.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`;
    converter.value = '';
}
const converFunction = () => {
    if (converter.value === ``) {
        result.textContent = `Musisz podać wartość`;
    } else if (one.textContent === '°C') {
        fahrToCel();
    } else {
        celToFahr();
    }
}

const resetFunction = () => {
    result.textContent = '';
    converter.value = '';
}

change.addEventListener('click', swap);
convertBtn.addEventListener('click', converFunction);
reset.addEventListener('click', resetFunction);