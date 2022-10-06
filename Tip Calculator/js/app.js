const inputPrice = document.querySelector('#price');
const inputPeople = document.querySelector('#people');
const inputTip = document.querySelector('#tip');
const countBtn = document.querySelector('.count');
const errorP = document.querySelector('.error');
const costInfo = document.querySelector('.cost-info');
const costSpan = document.querySelector('.cost');


const showBill = () => {
    if(inputPrice.value === '' || inputPeople.value === '' || inputTip.value === 0) {
        errorP.textContent = "Uzupełnił wszystkie pola!"
        costInfo.style.display = 'none';
    } else {
        errorP.textContent = ""
        countBill();
    }
}

const countBill = () => {
    const newPrice = parseFloat(inputPrice.value);
    const newPeople = parseInt(inputPeople.value);
    const newTip = parseFloat(inputTip.value);

    const sum = (newPrice + newPrice * newTip) / newPeople;

    costInfo.style.display = 'block';
    costSpan.textContent = sum.toFixed(2);
}

countBtn.addEventListener('click', showBill)