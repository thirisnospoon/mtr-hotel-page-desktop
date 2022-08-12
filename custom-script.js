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



const villaCards = document.querySelectorAll('.custom-villa-card');
const bookButtons = document.querySelectorAll('.btn-book');

villaCards.forEach((card, index) => {
    card.addEventListener('mouseover', event => {
        for (button of bookButtons) {
            button.style.visibility = 'hidden';
        }

        for (currentCard of villaCards) {
            currentCard.classList.remove('selected-card');
        }
        
        bookButtons[index].style.visibility = 'visible';
        card.classList.add('selected-card');
        bookButtons[index].style.opacity = '1';
    });
});

// window.addEventListener('scroll', event => {
//     for (let i = 0; i < bookButtons.length; i++) {
//         if (!isInViewport(bookButtons[i])) {
//             bookButtons[i].style.visibility = 'hidden';
//             bookButtons[i + 1].style.visibility = 'visible';
//         }
//         else {
//             for (n = i + 1; n < bookButtons.length; n++) {
//                 bookButtons[n].style.visibility = 'hidden';
//             }
//         }
//     }


// });

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



const price1 = 3300;
const price2 = 3600;
const price3 = 4200;

const actualPrice = document.querySelector('.actual-villa-price');
actualPrice.innerHTML = `<strong>£${price1}</strong><span style="font-size: 14px; color:rgb(95, 95, 95)"> / 7 nights</span>`;
