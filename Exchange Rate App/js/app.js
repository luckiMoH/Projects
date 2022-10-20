const currencyOne = document.querySelector('#currency-one');
const amountOne = document.querySelector('.amount-one');
const currencyTwo = document.querySelector('#currency-two');
const amountTwo = document.querySelector('.amount-two');
const swapBtn = document.querySelector('.swap');
const rateInfo = document.querySelector('.rate-info');

// const calculate = () => {
//
//     fetch(`https://api.ratesapi.io/api/latest?base=${currencyOne.value}&symbols=${currencyTwo.value}`)
//         .then(res => res.json())
//         .then(data => {
//
//             const currency1 = currencyOne.value;
//             const currency2 = currencyTwo.value;
//
//             const rate = data.rates[currency2];
//             rateInfo.textContent = `1 ${currency1} = ${rate.toFixed(4)} ${currency2}`;
//             amountTwo.value = (amountOne.value * rate).toFixed(2)
//         })
// }
//
// const swap = () => {
//     const oldValue = currencyOne.value;
//     currencyOne.value = currencyTwo.value;
//     currencyTwo.value = oldValue;
//     calculate();
// }
//
// currencyOne.addEventListener('change', calculate);
// currencyTwo.addEventListener('change', calculate);
// amountOne.addEventListener('input', calculate);
// swapBtn.addEventListener('click', swap)
//
// calculate();

var myHeaders = new Headers();
myHeaders.append("apikey", "HDuOF5JI5v9OrNWPstngwz6axrHoYu1n");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};

const calculate = () => {
    fetch(`https://api.apilayer.com/currency_data/live?source=${currencyOne.value}&currencies=${currencyTwo.value}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            const currency1 = currencyOne.value;
            const currency2 = currencyTwo.value;

            const rate = data.quotes[`${currency1}${currency2}`];
            rateInfo.textContent = `1 ${currency1} = ${rate.toFixed(4)} ${currency2}`;
            amountTwo.value = (amountOne.value * rate).toFixed(2)
        })
        .catch(error => console.log('error', 'Wyczerpany limit dziennego/miesiecznego API'));
}


const swap = () => {
    const oldValue = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = oldValue;
}

currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
swapBtn.addEventListener('click', swap)

calculate();