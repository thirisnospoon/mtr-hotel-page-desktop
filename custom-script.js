const popUp = document.querySelector('.hidden-villa-info-wrapper');
const villaBtn = document.querySelector('.villa-link');
const closeBtn = document.querySelector('.close-btn');
const popupContainer = document.querySelector('.hidden-villa-info');

villaBtn.addEventListener('click', event => {
    event.preventDefault();
    popUp.classList.remove('hidden');
});

closeBtn.addEventListener('click', event => {
    event.preventDefault();
    popUp.classList.add('hidden');
});

popUp.addEventListener('click', event => {
    event.preventDefault();
    if (event.target == popUp) {
        popUp.classList.add('hidden');
    }
});