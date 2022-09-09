const arrowBtn = document.querySelector('.arrow');
const arrowIcon = document.querySelector('.fas');
const img = document.querySelector('.item');

// 1. nasłuchiwanie na clicka na przycisk
// 2. dodawanie klasy 'hide'
// 3. obracać strzałkę

const showImg = () => {
    img.classList.toggle('hide')

    if (img.classList.contains('hide')){
        arrowIcon.style.transform = 'rotate(180deg)';
    } else {
        arrowIcon.style.transform = 'rotate(0)';
    }
}

arrowBtn.addEventListener('click',showImg);
