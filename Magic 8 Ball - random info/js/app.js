const ball = document.querySelector('.ball-img img');
const input = document.querySelector('.question-area input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');
const answersArr = ["Tak!", "Nie!", "Może.", "Ciężko powiedzieć...", "Nie chcesz znać odpowiedzi na to pytanie... :/"];

const checkAnswer = () => {
    console.log(input.value);
    const index = Math.floor(Math.random() * (answersArr.length));

    if (input.value !== "" && input.value.slice(-1) === "?") {
        answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[index]}`;
        error.textContent = "";
        ball.classList.remove('shake-animation');
    } else if (input.value !== "" && input.value.slice(-1) !== "?"){
        error.textContent = 'Pytanie musi być zakończone znakiem "?"'
        answer.textContent = "";
        ball.classList.remove('shake-animation');
    } else {
        error.textContent = 'Zadaj bili pytanie.'
        answer.textContent = "";
        ball.classList.remove('shake-animation');
    }

}

const addAnimation = () => {
    ball.classList.add('shake-animation');
}

const showAnswer = () => {
    addAnimation();
    setTimeout(checkAnswer, 1000);
}

ball.addEventListener('click', showAnswer);
